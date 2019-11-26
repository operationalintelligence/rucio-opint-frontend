import React from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Card, Form, Select, Row, Tag, Button, Input } from "antd";

import API from '../config/api';
import { fetchActions } from "../creators/actions";
import { fetchIssueCategoriesById } from '../creators/issueCategories';
import { postSolution } from "../creators/issueSolution";

const { TextArea } = Input;

class IssueDetailFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {actionWorked: true, actionNA: false};
    }

    componentDidMount(){
        this.props.dispatch(fetchActions());
        this.props.dispatch(fetchIssueCategoriesById(this.props.issue.category));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                API.post('api/actions/', {action: values.newaction || (this.state.actionWorked ? 'Proposed' : values.action)})
                    .then(res => {
                        const solution = {
                            category: this.props.category.id,
                            solution: res.data.id,
                            affected_site: values.site,
                            real_cause: null
                        }
                        postSolution(solution);
                    })
                    .catch(e => {
                        console.log('Error ', e);
                    })
        }
          });
        this.props.history.push('/issues/transfer');
    }

    handleActionWorkedChange = (e) => {
        e === 'No' ?
        this.setState(() => ({ actionWorked:false}))
        :
        this.setState(() => ({ actionWorked:true}))
    }

    handleActionChange = (e) => {
        e === 'None' ?
        this.setState(() => ({ actionNA:true}))
        :
        this.setState(() => ({ actionNA:false}))
    }

    render(){
        if (!this.props.issue) return <div></div>
        actionOptions = []
        var actionOptions = this.props.actions.map(function (action) {
            if(!['Unknown', 'Proposed'].includes(action.action)){
                return <Select.Option key={action.action} value={action.id}>{action.action}</Select.Option>    
            }
          });
        const { getFieldDecorator } = this.props.form;
        return(
            <Card className='detail-feedback-card'> 

                <Row className='detail-action-card-message'>
                    <Tag color="red">{this.props.issue.amount}</Tag>
                    {this.props.issue.message}
                </Row>

                <Form 
                    className='feedback-form'
                    onSubmit={this.handleSubmit}
                >
                    <Form.Item label="Did the suggested action work ?" colon={false}>
                    {getFieldDecorator('actionworked', {
                        initialValue:'Yes'
                      })(
                        <Select onChange={this.handleActionWorkedChange}>
                            <Select.Option value="Yes">Yes</Select.Option>
                            <Select.Option value="No">No</Select.Option>
                        </Select>  
                      )}          
                    </Form.Item>
                    { !this.state.actionWorked &&
                    <Form.Item label="What action did Work ?" colon={false}>
                    {getFieldDecorator('action', {
                        initialValue:''
                      })(
                        <Select showSearch onChange={this.handleActionChange} optionFilterProp="children">
                            <Select.Option value=""></Select.Option>
                            {actionOptions}
                            <Select.Option value="None">None of the above</Select.Option>
                        </Select>   
                      )}         
                    </Form.Item>
                    }
                    { this.state.actionNA &&
                        <Form.Item label="Please describe the action taken">
                        {getFieldDecorator('newaction', {})(
                            <TextArea rows={4} />
                        )}
                        </Form.Item>
                    }
                    <Form.Item label="Which site was affected ?" colon={false}>
                    {getFieldDecorator('site', {
                        initialValue:'unknown'
                      })(
                        <Select>
                            <Select.Option value="unknown">Unknown</Select.Option>
                            {this.props.issue.src_site !== 'UNKNOWN' && <Select.Option value='src_site'>{this.props.issue.src_site}</Select.Option>}
                            {this.props.issue.dst_site !== 'UNKNOWN' &&  <Select.Option value='dst_site'>{this.props.issue.dst_site}</Select.Option> }
                        </Select>      
                      )}      
                    </Form.Item>
                    <Form.Item s>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}

const WrappedFeedbackForm = Form.create({ name: 'feedback' })(IssueDetailFeedback);

const mapStateToProps = (state) => {
    return (
    {
        actions: state.actions.actions,
        actions_pending: state.actions.pending,
        actions_error: state.actions.error,
        category: state.issueCategories.issueCategory,
        category_pending: state.issueCategories.pending,
        category_error: state.issueCategories.error
    })};

export default connect(mapStateToProps)(withRouter(WrappedFeedbackForm));

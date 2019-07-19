import React from "react";
import { Card, Form, Select, Row, Tag, Button, Input } from "antd";
import { withRouter } from 'react-router-dom'

import { connect } from "react-redux";
import { fetchActions } from "../creators/actions";

const { TextArea } = Input;

class IssueDetailFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {actionWorked: true, actionNA: false};
    }

    componentDidMount(){
        this.props.dispatch(fetchActions());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submit', e);
        this.props.history.push('/issues/');
    }

    handleActionWorkedChange = (e) => {
        e === 'No' ?
        this.setState(() => ({ actionWorked:false}))
        :
        this.setState(() => ({ actionWorked:true}))
    }

    handleActionChange = (e) => {
        console.log(e);
        e === 'None' ?
        this.setState(() => ({ actionNA:true}))
        :
        this.setState(() => ({ actionNA:false}))
    }

    render(){
        if (!this.props.issue) return <div></div>
        actionOptions = []
        var actionOptions = this.props.actions.map(function (action) {
            return <Select.Option key={action.text} value={action.id}>{action.text}</Select.Option>
          });

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
                    <Select onChange={this.handleActionWorkedChange} defaultValue="Yes">
                        <Select.Option value="Yes">Yes</Select.Option>
                        <Select.Option value="No">No</Select.Option>
                    </Select>            
                </Form.Item>
                { !this.state.actionWorked &&
                <Form.Item label="What action did Work ?" colon={false}>
                    <Select defaultValue="" onChange={this.handleActionChange}>
                        <Select.Option value=""></Select.Option>
                        {actionOptions}
                        <Select.Option value="None">None of the above</Select.Option>
                    </Select>            
                </Form.Item>
                }
                { this.state.actionNA &&
                    <Form.Item label="Please describe the action taken">
                        <TextArea rows={4} />
                    </Form.Item>
                }
                <Form.Item label="Which site was affected ?" colon={false}>
                <Select defaultValue="Unknown">
                    <Select.Option value="Unknown">Unknown</Select.Option>
                    {this.props.issue.src_site !== 'UNKNOWN' && <Select.Option value={this.props.issue.src_site}>{this.props.issue.src_site}</Select.Option>}
                    {this.props.issue.dst_site !== 'UNKNOWN' &&  <Select.Option value={this.props.issue.dst_site}>{this.props.issue.dst_site}</Select.Option> }
                </Select>            
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
    {issue: state.issues.issue,
    actions: state.actions.actions,
    loading: state.actions.loading,
    error: state.actions.error
        })};

export default connect(mapStateToProps)(withRouter(WrappedFeedbackForm));

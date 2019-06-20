import React from "react";
import { Card, Form, Select, Row, Tag, Button, Input } from "antd";
import { withRouter } from 'react-router-dom'

const { TextArea } = Input;

class ErrorDetailFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {actionWorked: true, actionNA: false};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submit', e);
        this.props.history.push('/errors/');
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
        this.setState(() => ({ actionNA:true}))
    }

    render(){
        if (!this.props.error) return <div></div>
        return(
            <Card className='detail-feedback-card'> 

                <Row className='detail-action-card-message'>
                    <Tag color="red">{this.props.error.amount}</Tag>
                    {this.props.error.message}
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
                        <Select.Option value="Action1">Action1</Select.Option>
                        <Select.Option value="Action2">Action2</Select.Option>
                        <Select.Option value="Action3">Action3</Select.Option>
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
                    {this.props.error.src_site !== 'UNKNOWN' && <Select.Option value={this.props.error.src_site}>{this.props.error.src_site}</Select.Option>}
                    {this.props.error.dst_site !== 'UNKNOWN' &&  <Select.Option value={this.props.error.dst_site}>{this.props.error.dst_site}</Select.Option> }
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

const WrappedFeedbackForm = Form.create({ name: 'feedback' })(ErrorDetailFeedback);
export default withRouter(WrappedFeedbackForm);
// export default WrappedFeedbackForm;

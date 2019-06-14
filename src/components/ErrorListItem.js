import React from "react";
import { Card, Row, Col, Tag, Icon } from "antd";

class ErrorListItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        return(
            <Card
                className='error-card'
            >  
                <Row className='error-card-message'>
                    <Tag color="red">{this.props.amount}</Tag>
                    {this.props.message}
                </Row>

                <Row className='error-card-info'>
                    <Col span={16}>
                        <Tag>{this.props.src_site}</Tag>
                        <Icon style={{ "margin-right": "8px" }} type="arrow-right" />
                        <Tag>{this.props.dst_site}</Tag>
                    </Col>
                    <Col span={8}>
                    
                    </Col>
                </Row>
            </Card>
        )
    }
}


export default ErrorListItem;

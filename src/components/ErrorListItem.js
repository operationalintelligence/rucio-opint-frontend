import React from "react";
import { Card, Row, Tag, Icon } from "antd";

class ErrorListItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleCardClick = (e) => {
        this.props.handleSelection(this.props.id);
    }

    render(){
        return(
            <a>
            <Card
                className='error-card'
                onClick= {this.handleCardClick}
            >  
                <Row className='error-card-message'>
                    <Tag color="red">{this.props.amount}</Tag>
                    {this.props.message}
                </Row>

                <Row className='error-card-info'>
                        <Tag>{this.props.src_site}</Tag>
                        <Icon style={{ marginRight: "8px" }} type="arrow-right" />
                        <Tag>{this.props.dst_site}</Tag>
                </Row>
            </Card>
            </a>
        )
    }
}


export default ErrorListItem;

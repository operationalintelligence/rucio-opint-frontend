import React from "react";
import { Card, Tag, Icon, Row, Col, Button } from "antd";

class ErrorDetailAction extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSubmition = (e) => {
        // this.props.handleSelection(this.props.id);
    }

    // handleSiteClick = (site) => {
    //     if (site && site !== 'UNKNOWN'){
    //         const url = 'https://wlcg-cric.cern.ch/core/rcsite/detail/' + site + '/'
    //         console.log(url);
    //         // window.location.href = url
    //     }
    // }

    renderSite = (site) => {
        // if ( site !== 'UNKNOWN'){
        //     return (
        //         <a onClick={this.handleSiteClick(site)}>
        //             <Tag>{site}</Tag>
        //         </a>
        //         )
        // }
        // else{
            console.log(this.props.error)
            return <Tag>{site}</Tag>
        // }
    }

    render(){
        if (!this.props.error) return <div></div>
        return(
            <Card className='detail-action-card'> 
                <Row className='detail-action-card-message'>
                    <Tag color="red">{this.props.error.amount}</Tag>
                    {this.props.error.message}
                </Row>
                <Row type="flex">
                    <Col span={12}>
                    <Row className='detail-action-card-info'>
                        <Row>
                            {this.renderSite(this.props.error['src_site'])}
                            <Icon style={{ marginRight: "8px" }} type="arrow-right" />
                            {this.renderSite(this.props.error['dst_site'])}
                        </Row>
                        <Row style={{marginTop: '15px'}}>
                            <h3>Possible issue:</h3>
                            An issue with the storage
                        </Row>
                        <Row style={{marginTop: '15px'}}>
                            <h3>Proposed action:</h3>
                            Submit a ticket to the site.
                        </Row>
                        <Row style={{marginTop: '15px'}}>
                            <h3>Actions:</h3>
                        </Row>
                        <Row>
                            <Button type="primary" shape="round" icon="upload">
                                Open Ticket on source site.
                            </Button>
                        </Row>
                        <Row>
                            <Button style={{marginTop: '15px'}} type="primary" shape="round" icon="download">
                                Open Ticket on destination site.
                            </Button>
                        </Row>
                    </Row>
                    </Col>
                    <Col span={12}>
                        <Button className='detail-action-submit-button' size='large'>Take action</Button>
                    </Col>
                </Row>
            </Card>
        )
    }
}


export default ErrorDetailAction;

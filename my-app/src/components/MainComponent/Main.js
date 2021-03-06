import React from 'react'
import { Row, Col, Modal} from 'antd';
import DisplayTime from '../MemberDetails/MemberDetails';
import './Main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    showModal = (test) => {
        this.setState({
            visible: true,
            selectedMember: test
        });
        console.log(test)

    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };


    componentDidMount() {
        fetch("https://5f522d837c47c30016e301c0.mockapi.io/Data2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result[0].members[0])
                    this.setState({
                        isLoaded: true,
                        items: result[0].members
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items, selectedMember } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="main">
                    <div className="container">
                        <Row>
                            {items.map(item => (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={item.id} onClick={() => this.showModal(item.activity_periods)}>
                                    <div className="border">
                                        <div className="detail">
                                            <div className="image">
                                            </div>
                                            <div className="overlay" />
                                            <div className="content">
                                                <p className="name">USER ID - {item.id}</p>
                                                <p className="name">NAME - {item.real_name}</p>
                                                <p className="name">LOCATION - {item.tz}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <Modal
                            title="Member Details"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            {
                                selectedMember ? (
                                    <div>
                                        <DisplayTime activity_periods={selectedMember} />
                                    </div>
                                ) : null
                            }
                        </Modal>
                    </div>
                </div>
            );
        }
    }
}

export default Main
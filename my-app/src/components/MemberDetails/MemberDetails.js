import React from 'react'
import moment from 'moment';
import { Calendar, Button } from 'antd'
import './MemberDetails.scss'


class DisplayTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCalender: false,
        }
        this.toggleCalender = this.toggleCalender.bind(this)
    }

    toggleCalender() {
        this.setState({
            displayCalender: !this.state.displayCalender
        })
    }


    componentDidMount() {

    }

    render() {
        const timeRanges = this.props.activity_periods
        return (
            <div className="member-details">
                <div className="button">
                    <Button onClick={this.toggleCalender}>View in calender</Button>
                </div>
                <div className="cards">
                    {
                        timeRanges.map(item => (
                            <div className="flex">
                                <div className="details">
                                    <p>Start Date = {item.start_time.substr(0, 11)}</p>
                                    <p>Start Time={item.start_time.substr(11,)}</p>
                                    <p>End Date={item.end_time.substr(0, 11)}</p>
                                    <p>End Time={item.end_time.substr(11.)}</p>
                                </div>
                                <div className="calender">
                                    {
                                        this.state.displayCalender ? (
                                            <Calendar value={moment(item.start_time.substr(0, 11))}
                                                fullscreen={false} />

                                        ) : null
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DisplayTime
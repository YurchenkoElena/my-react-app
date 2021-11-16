import React from "react";
import {connect} from "react-redux";
import Clock from "./Clock";
import {sendClockAC, setHourAC, setMinuteAC, setSecondAC} from "../../../../redux/clock-reducer";

class ClockContainer extends React.Component {

    componentDidMount() {

    }

    render() {

        let hh = 0;
        let mm = 0;
        let ss = 0;

        setInterval(() => {
            let day = new Date();
            hh = day.getHours() * 30;
            mm = day.getMinutes() * 6;
            ss = day.getSeconds() * 6;

            this.props.setHour(`rotateZ(${(hh) + (mm / 12)}deg)`);
            this.props.setMinute(`rotateZ(${mm}deg)`);
            this.props.setSecond(`rotateZ(${ss}deg)`);
        });
            
        return (
            <div>
                {/*<Clock hour={`rotateZ(${(hh)+(mm/12)}deg)`} minute={`rotateZ(${mm}deg)`} second={`rotateZ(${ss}deg)`} />*/}
                <Clock hour={this.props.clockHh} minute={this.props.clockMm} second={this.props.clockSs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clockHh: state.clock.clockHh,
        clockMm: state.clock.clockMm,
        clockSs: state.clock.clockSs
    }
};

export default connect(mapStateToProps, {   setHour: setHourAC,
                                                             setMinute: setMinuteAC,
                                                             setSecond: setSecondAC
                                                            })(ClockContainer);

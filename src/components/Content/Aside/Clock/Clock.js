import React from "react";

const Clock = (props) => {

    return (
        <div className="clock">
            <div className="hour">
                {/*<div className="hr" id="hr" ref={hr} style={{stylesHr}}> </div>*/}
                <div className="hr" id="hr" style={{transform: `${props.hour}`}}></div>
                {/*<ClockHour styleHr={stylesHr} />*/}
            </div>
            <div className="min">
                {/*<div className="mn" id="mn" ref={mn} style={{stylesMn}}> </div>*/}
                <div className="mn" id="mn" style={{transform: `${props.minute}`}}></div>
            </div>
            <div className="sec">
                {/*<div className="sc" id="sc" ref={sc} style={{stylesSc}}> </div>*/}
                <div className="sc" id="sc" style={{transform: `${props.second}`}}></div>
            </div>
        </div>
    )

}

export default Clock;

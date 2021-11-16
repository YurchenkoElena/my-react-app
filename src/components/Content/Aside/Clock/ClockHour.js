import React from "react";

const ClockHour = (props) => {
    console.log(props);
    let stylesHr = props.styleHr;
    return <div className="hr" id="hr" style={{stylesHr}} > </div>
}

export default ClockHour;
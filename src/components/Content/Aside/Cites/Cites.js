import React from "react"

const Cites = (props) => {

    return <div className="cites-wrapper">
        <h4> The cite of the day</h4>
        <p className="cites-text"> {props.text }</p>
        <p className="cites-author"> {props.author }</p>
    </div>
}

export default Cites;
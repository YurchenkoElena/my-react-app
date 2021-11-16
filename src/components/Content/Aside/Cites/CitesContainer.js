import React from "react";

import {connect} from "react-redux";
import Cites from "./Cites";
import {setIndexAC} from "../../../../redux/cite-reducer";

class CitesContainer extends React.Component {

    componentDidMount() {

        function getRandomFloat(min,max) {
            return Math.floor(Math.random() * (max-min)) + min;
        }
        let index = getRandomFloat(0, this.props.cites.cites.length);
        let cite = this.props.cites.cites[index];
        this.props.setIndex(cite);
    }

    render() {
        return <Cites text={this.props.cites.index.text} author={this.props.cites.index.author}/>
    }
}

let mapStateToProps = (state) => ({
    cites: state.cites
});

export default connect(mapStateToProps, { setIndex: setIndexAC })(CitesContainer);
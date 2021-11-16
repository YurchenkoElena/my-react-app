import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:3004/profiles-api`)
            .then(response => {
                this.props.setUserProfile(response.data.items[1]);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


// let withUrlDataContainerComponent = withRouter(ProfileContainer);
//
console.log(withRouter(ProfileContainer));

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(ProfileContainer);

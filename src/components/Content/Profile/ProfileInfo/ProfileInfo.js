import photo from "../../../../images/1551511784_4.jpg";
import Preloader from "../../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className="main-profile-info">
            <div className="avatar">
                <img src={props.profile.photos.small ? props.profile.photos.small : photo} alt="this-is-my-profile" />
            </div>
            <div className="profile-info-text">
                <div className="profile-name">
                    {props.profile.fullName ? props.profile.fullName : 'Emily Patricia Mills'}
                    {/*Emily Patricia Mills*/}
                </div>
                <div className="profile-slogan">
                    <p>{props.profile.aboutMe}</p>
                    It’s never too late to be what you might have been
                </div>
                <div className="profile-contacts">
                    <h4>My contacts</h4>
                    <a href={'http://' + props.profile.contacts.instagram} className="instagram">{props.profile.contacts.instagram}</a>
                    <a href={'http://' + props.profile.contacts.facebook} className="facebook">{props.profile.contacts.facebook}</a>
                    <a href={'http://' + props.profile.contacts.twitter} className="twitter">{props.profile.contacts.twitter}</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
import photo from "../../../../images/1551511784_4.jpg";

const ProfileInfo = () => {
    return (
        <div className="main-profile-info">
            <div className="avatar">
                <img src={photo} alt="this-is-my-profile" />
            </div>
            <div className="profile-info-text">
                <div className="profile-name">
                    Emily Patricia Mills
                </div>
                <div className="profile-slogan">
                    It’s never too late to be what you might have been
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
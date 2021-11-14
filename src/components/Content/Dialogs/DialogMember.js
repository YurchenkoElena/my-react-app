import {NavLink} from "react-router-dom";

const DialogMember = (props) => {
    let memberPath = "/messages/" + props.id;
    return (
        <NavLink to={memberPath} className="dialog">{props.name}</NavLink>
    );
}

export default DialogMember;
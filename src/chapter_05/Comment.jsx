import React from "react";
import Avatar from "./Avatar";
import UserInfoName from "./UserInfo-name";

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author}/>
                <UserInfoName user={props.author}/>

            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}

export default Comment
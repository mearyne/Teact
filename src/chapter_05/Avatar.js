import React from "react";

const Avatar = (props) => {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl} // props.user = props.author
             alt={props.user.name}/> // props.user.name = props.author.name
    );
}

export default Avatar
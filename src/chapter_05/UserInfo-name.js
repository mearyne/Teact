import React from "react";

const UserInfoName = (props) => {

    return (
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    );

}

export default UserInfoName
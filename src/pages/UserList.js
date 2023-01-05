import React from "react"

const UserList = () => {
    const users = [
        {name: "Lee", mail: "Lee@naver.com"},
        {name: "Hong", mail: "Hong@naver.com"},
        {name: "Juu", mail: "Juu@naver.com"},
    ]

    const User = ({userData}) => { // {} 중괄호를 넣지 않으면 제대로 데이터가 안불러와진다.
        return (
            <tr>
                <th>{userData.name}</th>
                <th>{userData.mail}</th>
            </tr>
        )
    }

    return (
        <table>
            <thead>
            <tr>
                <th><h1>name</h1></th>
                <th><h1>mail</h1></th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) =>
                <User userData={user}/>
            )}
            </tbody>
        </table>
    );
}

export default UserList
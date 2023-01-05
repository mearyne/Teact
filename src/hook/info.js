import React, { useEffect, useState } from "react"

const Info = () => {
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")

    useEffect(() => {
        console.log("complete rendering")
        console.log({
            name,
            nickname,
        })
    }, [name]);

    const onChangeName = (expect) => {
        setName(expect.target.value)
    }

    const onChangeNickname = (expect) => {
        setNickname(expect.target.value)
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
}

export default Info

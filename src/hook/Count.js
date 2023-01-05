import React, { useEffect, useState } from "react"

function Counter() {
    let [count, setCount] = useState(0)

    // const onIncrease = () => {
    //     setCount(++count)
    // }

    useEffect(() => {
        document.title = `You clicked ${count} items`
    })

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    )
}

export default Counter

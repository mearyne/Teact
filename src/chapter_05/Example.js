import { useState, useEffect } from "react"

const Example = () => {
    const title = document.title;
    const [count, setCount] = useState(0)

    useEffect(() => {
        return () => {
            document.title = `You clicked ${count} times`
        }
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            ></button>
        </div>
    )
}

export default Example

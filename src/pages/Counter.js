import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
       <div>
           <button onClick={onIncrease}><h1>+1</h1></button>
           <button onClick={onDecrease}><h1>-1</h1></button>
           <p>{number}</p>
       </div>
   );

}

export default Counter
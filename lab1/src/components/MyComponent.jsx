import { useState } from "react";

const MyComponent = ({message}) => {
    const [value, setValue] = useState(0);

    function handleClick() {
        setValue(value + 1);
    }

    return(
        <>
            <p>{message}</p>
            <p>Value: {value}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default MyComponent; 
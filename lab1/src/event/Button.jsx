const Button = () => {
    function handleClick() {
        console.log('Button active!')
    }

    return(
        <>
            <button onClick={handleClick}>
                Click
            </button>
        </>
    )
}

export default Button;
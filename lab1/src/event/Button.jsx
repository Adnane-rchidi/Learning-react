const Button = () => {
    function handleClick() {
        console.log('Button active!')
    }

    return(
        <>
            <button onClick={handleClick}>
                Submit
            </button>
        </>
    )
}

export default Button;
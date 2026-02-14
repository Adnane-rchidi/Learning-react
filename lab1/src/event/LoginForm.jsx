const LoginForm = () => {
    function handleChange(event) {
        console.log("Value: ", event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="Name"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LoginForm;
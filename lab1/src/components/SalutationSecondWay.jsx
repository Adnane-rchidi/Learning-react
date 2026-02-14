const SalutationSecondWay = (props) => {
    return(
        <>
            <p>Ich bin {props.name} und ich bin {props.age} Jahra alt.</p>

            {/* //useing children to take the what is inside */}
            {props.children}
        </>
    )
}

export default SalutationSecondWay;
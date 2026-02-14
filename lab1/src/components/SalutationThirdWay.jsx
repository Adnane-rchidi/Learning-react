const SalutationThirdWay = ({ person }) => {
    return(
        <>
            <p>Mein Name ist {person.name} und ich spreche {person.languages.languageOne}, 
            {person.languages.languageTwo} und ein bisschen {person.languages.languageThree}</p>
        </>
    )
}

export default SalutationThirdWay;
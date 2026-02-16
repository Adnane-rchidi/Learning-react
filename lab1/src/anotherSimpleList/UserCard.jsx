function UserCard({name, age}) {
    return(
        <div className="userCard">
            <h3>{name}</h3>
            <strong>{age}</strong>
        </div>
    )
}

export default UserCard;
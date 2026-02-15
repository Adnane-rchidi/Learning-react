const UserCard = ({ name, role }) => {
    return(
        <div className="userCard">
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    )
}

export default UserCard;
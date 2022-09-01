const Person = (props) => {
    let newName = props.name;
    if (props.name.length > 8) {
        newName = props.name.slice(0,6)
    }
    let reply;
    if (props.age >= 18) {
        reply = "Please go vote"
    } else {
        reply = "You must be 18"
    }
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <div>
            <h1>Name: {newName}</h1>
            <p>Learn some information about this person</p>
            <h4>Hobbies</h4>
            <ul>
                {hobbies}
            </ul>
            <h3>{reply}</h3>
        </div>
    )
}
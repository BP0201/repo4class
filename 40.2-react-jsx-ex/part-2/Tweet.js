const Tweet = ({username, name, date, message}) => (
    <div>
        <p><b>{username}</b> AKA {name}</p>
        <p>{message} - {date}</p>
    </div>
)
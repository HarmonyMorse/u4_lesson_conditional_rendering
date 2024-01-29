const Inbox = ({ messages }) => {

    return (
        <div>
            <h1>Hello!</h1>
            {messages.length && (
                <h2>You have {messages.length} unread messages.</h2>
            )}
            {messages.map((mess, index) => (
                <p key={index}>{mess}</p>
            ))}
        </div>
    )
}

export default Inbox
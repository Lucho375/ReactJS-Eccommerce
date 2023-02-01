const Notification = ({ message, type }) => {
    const notificationStyle = {
        position: "absolute",
        top: 120,
        right: 50,
        fontWeight: "bold",
        backgroundColor: type === "success" ? "rgb(46, 125, 50)" : "red",
        color: "white",
        borderRadius: 5,
        padding: "10px 20px 10px 20px",
    }
    if (!message) return null

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification;
import { useState, createContext } from 'react';
export const NotificationContext = createContext();

const Notification = ({ message, type }) => {
    const notificationStyle = {
        position: "absolute",
        top: 120,
        right: 50,
        fontWeight: "bold",
        backgroundColor: type === "success" ? "green" : "red",
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

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState("")
    const [type, setType] = useState("success");

    const setNotification = (message, type, time) => {
        setMessage(message)
        setType(type)
        setTimeout(() => setMessage(""), time * 1000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} type={type}/>
            {children}
        </NotificationContext.Provider >
    )
}
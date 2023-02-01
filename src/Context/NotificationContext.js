import { useState, createContext } from 'react';
import Notification from '../components/Notification/Notification';
export const NotificationContext = createContext();

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
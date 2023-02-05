import { motion, AnimatePresence } from "framer-motion";
import "./Notification.scss"
const Notification = ({ message, type }) => {

    const background = {
        backgroundColor: type === "success" ? "rgb(46, 125, 50)" : "red"
    }

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    className="notification"
                    style={background}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >{message}</motion.div>
            )}
        </AnimatePresence>
    )
}

export default Notification;
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const formatTimeAgo = (timestamp) => {
        const now = new Date();
        const date = timestamp.toDate(); // Convert Timestamp to Date object

        const diff = Math.abs(now - date);

        const minutes = Math.floor(diff / (1000 * 60));
        if (minutes < 1) {
            return "just now";
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours < 24) {
            return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
    return (
        <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className="messageInfo">
                <img src={currentUser.uid === message.senderId ? currentUser.photoURL : data.user.photoURL} alt='' />
                <span>{formatTimeAgo(message.date)}</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt='' />}
            </div>
        </div>
    )
}

export default Message

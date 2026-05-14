import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import "./Message.css";

export default function Message({ userId }) {

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const bottomRef = useRef(null);

    const socketRef = useRef(null);

    const receiverId = userId === 1 ? 2 : 1;

    useEffect(() => {

        // ✅ create socket once
        socketRef.current = io("http://localhost:3000");

        socketRef.current.emit("join", userId);

        socketRef.current.on("receiveMessage", (data) => {
            if (data.sender_id !== userId) {
                setMessages((prev) => [
                    ...prev,
                    { ...data, fromMe: false }
                ]);
            }
        });

        return () => {
            socketRef.current.disconnect();
        };

    }, [userId]);

    const send = () => {
        if (!text.trim()) return;

        const data = {
            sender_id: userId,
            receiver_id: receiverId,
            text: text,
            fromMe: true
        };

        // ✅ FIX: use socketRef
        socketRef.current.emit("sendMessage", data);

        setMessages((prev) => [...prev, data]);
        setText("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatApp">

            <div className="header">
                <div className="avatar">A</div>
                <div>
                    <div className="name">Chat Room {userId}</div>
                    <div className="status">online</div>
                </div>
            </div>

            <div className="body">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`msg ${m.fromMe ? "me" : "other"}`}
                    >
                        {m.text}
                    </div>
                ))}
                <div ref={bottomRef}></div>
            </div>

            <div className="footer">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === "Enter" && send()}
                />
                <button onClick={send}>Send</button>
            </div>

        </div>
    );
}
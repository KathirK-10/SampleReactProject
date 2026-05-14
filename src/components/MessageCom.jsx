import React from 'react'
import Message from "./Message";

const MessageCom = () => {
  return (
      <div style={{ display: "flex", gap: "20px" }}>
          <Message userId={1} />
          <Message userId={2} />
      </div>
  )
}

export default MessageCom
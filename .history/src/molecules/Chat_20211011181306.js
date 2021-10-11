import React, { useState } from 'react';

const Chat = ({ chat} ) => {
  const [chatIframe, setChatIframe] = useState(chat[0]);

  return (
    <div
    className="vh-100 col-md-4 col-sm-6 d-flex flex-column"
  >
    <div className="d-flex">
      {
        chat.stream.map(c => (
          <button
            className="btn btn-primary"
            onClick={() => setChatIframe(c.channel)}
          >
            {c.channel}
          </button>
        ))
      }
    </div>
    {
      chatIframe !== '' && (
        <iframe
          title="chat twitch"
          id="chat_embed"
          src={`https://www.twitch.tv/embed/${chatIframe}/chat?parent=clever-hodgkin-3f5081.netlify.app`}
          height="500"
          width="100%"
          style={{background: '#fff'}}
          className="h-100 border-0"
        />
      )
    }
  </div>
  )
}

export default Chat;
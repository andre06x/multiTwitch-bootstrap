import React from 'react';

const Chat = () => {
  return (
    <div
    className="vh-100 col-md-4 col-sm-6 d-flex flex-column"
  >
    <div className="d-flex">
      {
        chat.stream.map(c => (
          <button
            className="btn btn-primary"
            onClick={() => setChat({ stream: chat.stream, chat: c.channel })}
          >
            {c.channel}
          </button>
        ))
      }
    </div>
    {
      chat.chat !== '' && (
        <iframe
          title="chat twitch"
          id="chat_embed"
          src={`https://www.twitch.tv/embed/${chat.chat}/chat?parent=clever-hodgkin-3f5081.netlify.app`}
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
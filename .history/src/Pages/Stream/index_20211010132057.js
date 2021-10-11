import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const [chat, setChat] = useState({ stream: [], chat: '' });

  const {
    stream1,
    stream2,
    stream3
  } = useParams();

  const streams = [];
  streams.push({ channel: stream1 }, { channel: stream2 }, { channel: stream3 });

  useEffect(() => {
    setChat({ stream: [{ channel: stream1 }, { channel: stream2 }, { channel: stream3 }], chat: stream1 })

    streams.map((s, i) => (
      new window.Twitch.Embed(`twitch-embed${i}`, {
        channel: s.channel,
        layout: "video",
        width: '100%',
        height: '100%'
      })))
  }, []);

  return (
    <div
      className="container-fluid"
    >
      <div className="row">
        <div className={`${chat.stream.length >= 2 ? 'd-flex' : 'd-flex-column'} col-md-8 col-sm-6`}>
          <div
            style={{ height: '50vh' }}
            className="w-100 col-6"
            id="twitch-embed0"
          ></div>
          <div
            style={{ height: '50vh' }}
            className="w-100 col-6"
            id="twitch-embed1"
          ></div>
          <div
            style={{ height: '50vh' }}
            className="w-100 col-6"
            id="twitch-embed2"
          ></div>
          <div
            style={{ height: '50vh' }}
            className="w-100 col-6"
            id="twitch-embed3"
          ></div>
        </div>
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
              ''
              // <iframe
              //   id="chat_embed"
              //   src={`https://www.twitch.tv/embed/${chat.chat}/chat?parent=localhost`}
              //   height="500"
              //   width="100%"
              //   className="h-100 border-0"
              // >
              // </iframe>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Stream;
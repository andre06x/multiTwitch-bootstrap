import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Chat from '../../molecules/Chat';
const Stream = () => {
  const [chat, setChat] = useState({ stream: [''], chat: '' });

  const {
    stream1,
    stream2,
    stream3,
    stream4
  } = useParams();

  useEffect(() => {
    let streams = [{ channel: stream1 }, { channel: stream2 },
      stream3 !== undefined && { channel: stream3 },
      stream4 !== undefined && { channel: stream4 }
    ];
    streams = streams.filter(s => s !== false);
    setChat({ stream: streams, chat: stream1 })

    setTimeout(() => {
      console.log(streams)
      streams.map((s, i) => (
        new window.Twitch.Embed(`twitch-embed${i}`, {
          channel: s.channel,
          layout: "video",
          width: '100%',
          height: '100%'
        })))
    }, 100)
    //react-hooks/exhaustive-deps
  }, [stream1, stream2, stream3, stream4]);

  return (
    <div
      className="container-fluid"
    >
      <div className="row">
        <div 
          className={
            `${chat.stream.length > 2 
              ? 'd-flex  flex-wrap justify-content-center' 
              : 'd-flex-column'
            } col-md-8 col-sm-6`}
        >

          <div
            style={{ height: '50vh' }}
            className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
            id="twitch-embed0"
          ></div>
          <div
            style={{ height: '50vh' }}
            className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
            id="twitch-embed1"
          ></div>

          {chat.stream.length === 3 && (
            <div
              style={{ height: '50vh' }}
              className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
              id="twitch-embed2"
            ></div>
          )}

          {chat.stream.length === 4 && (
            <>
              <div
                style={{ height: '50vh' }}
                className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
                id="twitch-embed2"
              ></div>
              <div
                style={{ height: '50vh' }}
                className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
                id="twitch-embed3"
              ></div>
            </>
          )}

        </div>
        <Chat chat={chat}/>
      </div>
    </div>
  )
}

export default Stream;
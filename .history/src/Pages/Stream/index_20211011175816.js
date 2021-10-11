import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Chat from '../../molecules/Chat';
import Videos from '../../molecules/Videos';

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
    <div className="container-fluid">
      <div className="row">
        <Videos chat={chat}/>
        <Chat chat={chat}/>
      </div>
    </div>
  )
}

export default Stream;
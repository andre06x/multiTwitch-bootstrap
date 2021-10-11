import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {

  const {
    stream1,
    stream2
  } = useParams();
  const streams = [];
  streams.push({ channel: stream1 }, { channel: stream2 });

  useEffect(() => {
    streams.map((s, i) => (
      new window.Twitch.Embed(`twitch-embed${i}`, {
        channel: s.channel,
        layout: "video",
        width: '95%%',
        height: '350px'
      })))
  }, [])



  return (
    <div
      className="container-fluid p-4"
    >
      <div className="row">
        <div className="d-flex-column">
          <div className="w-100"id="twitch-embed0"></div>
          <div className="w-100"id="twitch-embed1"></div>
        </div>

        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/gaules/chat?parent=localhost"
          height="500"
          width="350"
          className="w-25">
        </iframe>
      </div>


    </div>
  )
}

export default Stream;
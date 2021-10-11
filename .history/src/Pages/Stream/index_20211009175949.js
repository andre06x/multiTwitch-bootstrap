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
        layout: "video"
      })))
  }, [])



  return (
    <div
      className="container-fluid"
    >
      <div className="row">
        <div className="d-flex-column">
          <div id="twitch-embed0"></div>
          <div id="twitch-embed1"></div>
        </div>

        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/gaules/chat?parent=localhost"
          height="500"
          width="350"
          className="justify-content-end">
        </iframe>
      </div>


    </div>
  )
}

export default Stream;
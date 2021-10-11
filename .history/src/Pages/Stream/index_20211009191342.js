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
        width: '100%',
        height: '100%'
      })))
  }, [])



  return (
    <div
      className="container-fluid"
    >
      <div className="row">
        <div className="d-flex-column col-md-8">
          <div style={{height: '50vh'}} className="w-100 "id="twitch-embed0"></div>
          <div style={{height: '50vh'}} className="w-100 "id="twitch-embed1"></div>
        </div>

        <iframe
          id="chat_embed"
          src="https://www.twitch.tv/embed/gaules/chat?parent=localhost"
          height="500"
          width="350"
          className="vh-100 col-sm-8 col-md-4"
          >
        </iframe>
      </div>


    </div>
  )
}

export default Stream;
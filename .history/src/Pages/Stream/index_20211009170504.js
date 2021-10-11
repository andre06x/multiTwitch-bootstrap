import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const streams = []
  streams.push({channel:useParams()}, {channel:useParams()[1]});
  console.log(streams)

  // useEffect(() => {
  //   streams.map((s, i) => (
  //     new window.Twitch.Embed(`twitch-embed${i}`, {
  //       channel: s,
  //       layout: "video"
  //     })))
  // }, [])



  return (
    <div
      className="container"
    >
      <div id="twitch-embed0"></div>
      <div id="twitch-embed1"></div>
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/gaules/chat?parent=localhost"
        height="500"
        width="350">
      </iframe>
    </div>
  )
}

export default Stream;
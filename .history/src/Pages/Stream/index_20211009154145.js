import React from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const {
    stream1, stream2
   } = useParams();
  

  return (
    <>
      <iframe src="https://player.twitch.tv/?channel=wildriftbr&enableExtensions=true&muted=true&parent=twitch.tv&player=popout&volume=0.5" frameborder="0"></iframe>
      <h1>Stream</h1>
    </>
  )
}

export default Stream;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const {
    stream1, stream2
   } = useParams();
  

  

  return (
    <>
        <div id="twitch-embed"></div>

        <iframe src="https://player.twitch.tv/?channel=zarack26&parent=www.example.com" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
    </>
  )
}

export default Stream;
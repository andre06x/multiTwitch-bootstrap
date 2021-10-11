import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const {
    stream1, stream2
   } = useParams();
  

   useEffect(() => {
    setTimeout(() => {
      new Twitch.Player("twitch-embed", {
        channel: "gaules"
      });
    },1000)
   }, [])

  return (
    <>
<div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
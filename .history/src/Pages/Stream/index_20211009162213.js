import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();


  useEffect(() => {
    setTimeout(() => {
      new window.Twitch.Player("twitch-embed", {
        channel: "gaules"
      });
    }, 2000)
  }, [])

  return (
    <>
      <div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
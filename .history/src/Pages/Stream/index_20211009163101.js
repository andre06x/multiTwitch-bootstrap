import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();

  useEffect(() => {
    new window.Twitch.Embed("twitch-embed");
  }, []);

  return (
    <>
      <div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
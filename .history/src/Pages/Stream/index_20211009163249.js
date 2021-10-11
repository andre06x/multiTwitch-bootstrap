import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();

  useEffect(() => {
    new window.Twitch.Play("twitch-embed", {
      channel: "gaules",
      // Only needed if this page is going to be embedded on other websites
    });
  }, []);

  return (
    <>
      <div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
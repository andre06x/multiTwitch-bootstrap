import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();

  useEffect(() => {
    new window.Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "gaules",
      // Only needed if this page is going to be embedded on other websites
      parent: ["embed.example.com", "othersite.example.com"]
    });
  }, []);

  return (
    <>
      <div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
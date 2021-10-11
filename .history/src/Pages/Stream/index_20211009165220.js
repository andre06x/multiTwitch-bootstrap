import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();

  useEffect(() => {
    new window.Twitch.Embed("twitch-embed", {
      channel: stream1,
      layout: "video"
      // Only needed if this page is going to be embedded on other websites
    });
  }, []);

  return (
    <>
      <div id="twitch-embed"></div>
      <iframe
  id="chat_embed"
  src="https://www.twitch.tv/embed/zarack26/chat?parent=localhost"
  height="500"
  width="350">
</iframe>
    </>
  )
}

export default Stream;
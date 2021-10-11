import React from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const {
    stream1, stream2
   } = useParams();
  
   var embed = new Twitch.Embed('twitch-embed', {
    channel: 'monstercat'
  });
  
  embed.addEventListener(Twitch.Embed.VIDEO_READY, function() {
    console.log('The video is ready');
  });
  return (
    <>
<iframe id="embed_baiano" src="https://player.twitch.tv/?muted=true&amp;channel=baiano&amp;parent=multitwitch.tv&amp;parent=www.multitwitch.tv" class="stream" ></iframe>      <h1>Stream</h1>
    </>
  )
}

export default Stream;
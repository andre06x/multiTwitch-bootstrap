import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream() {
  const {
    stream1, stream2
  } = useParams();



  return (
    <>
      <div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
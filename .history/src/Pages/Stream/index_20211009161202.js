import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Stream (){
  const {
    stream1, stream2
   } = useParams();
  

   useEffect(() => {
    setTimeout(() => {
      let a = new window.Twitch.Player("twitch-embed", {
        channel: "gaules"
      });
      console.log(a)
    },2000)
   }, [])

  return (
    <>
<div id="twitch-embed"></div>

    </>
  )
}

export default Stream;
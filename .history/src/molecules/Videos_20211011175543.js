import React from 'react';

const Videos = ({chat}) => {
  return (
    <div
      className={
        `${chat.stream.length > 2
          ? 'd-flex  flex-wrap justify-content-center'
          : 'd-flex-column'
        } col-md-8 col-sm-6`}
    >

      <div
        style={{ height: '50vh' }}
        className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
        id="twitch-embed0"
      ></div>
      <div
        style={{ height: '50vh' }}
        className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
        id="twitch-embed1"
      ></div>

      {chat.stream.length === 3 && (
        <div
          style={{ height: '50vh' }}
          className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
          id="twitch-embed2"
        ></div>
      )}

      {chat.stream.length === 4 && (
        <>
          <div
            style={{ height: '50vh' }}
            className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
            id="twitch-embed2"
          ></div>
          <div
            style={{ height: '50vh' }}
            className={`w-100 ${chat.stream.length > 2 && 'col-md-6'}`}
            id="twitch-embed3"
          ></div>
        </>
      )}

    </div>
  );
}

export default Videos;
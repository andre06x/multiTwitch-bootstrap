import React from 'react';
import { useParams } from 'react-router-dom';

const Stream = () => {
  const a = useParams();
  console.log(a)

  return (
    <h1>Stream</h1>
  )
}

export default Stream;
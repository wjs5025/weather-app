'use client'

import React, { useEffect } from 'react'
type Props = {
    error : Error;
    reset : () => void;
}

function Error({error,reset}:Props) {

    useEffect (() => {
        console.log(error.message);
    },[])

  return (
    <>
    <h1>에러페이지</h1>
    <button onClick={() => {reset()}}>새로고침</button></>
  )
}

export default Error
import React from 'react';

export default function BtnToNaver(){
  function pageToNaver(){
    window.location.href="https://naver.com";
  }
  return (
  <>
    <button onClick={pageToNaver}>Naver</button>
  </>
  )
}
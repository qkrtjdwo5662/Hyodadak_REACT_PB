import React,{useState} from "react";

export default function FuntionalState(){
  const [message, setMessage] = useState(0);
  const onClickEnter = () => {
    setMessage("Hi");
  }
  const onClickLeave = () => {
    setMessage("Bye");
  }
  return(
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}
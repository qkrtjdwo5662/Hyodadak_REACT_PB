import { useState } from "react";

export default function ChangeState(){
  const [message, setMessage] = useState(0);

  const clickBtn = () => {
    if(message === "click"){
      setMessage("One More");
    }else{
      setMessage("click");
    }
  }
  return(
    <>
      <button onClick={clickBtn}>click</button>
      <h1>{message}</h1>
    </>
    
  )
}
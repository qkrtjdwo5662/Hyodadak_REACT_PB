export default function BtnToNaver(){
  function pageToNaver(){
    window.location.href="https://naver.com";
  }
  return(
    <button onClick={pageToNaver}>naver</button>
  )
}

// 함수() -> 함수 바로 호출
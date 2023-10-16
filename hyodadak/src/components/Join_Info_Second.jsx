export default function Join_Info_Second(){
  return(
    <div className="all">
      <div className="info">회원를 입력해주세요!</div>
      <div className="container">
        <div className="join_wrap">
          <form>
            <div className="join_form_row">
              <input type="text" placeholder="아이디를 입력해주세요"></input>
            </div>
            <div className="join_form_row">
              <input type="password" placeholder="비밀번호를 입력해주세요"></input>
            </div>
            <div className="join_form_row">
              <input type="password" placeholder="비밀번호를 입력해주세요"></input>
            </div>
             
          </form>
          <div>
            <div className="btn_set join_btn">
              <button className="before_btn">이전</button>
            </div>

            <div className="btn_set join_btn">
              <button className="before_btn">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

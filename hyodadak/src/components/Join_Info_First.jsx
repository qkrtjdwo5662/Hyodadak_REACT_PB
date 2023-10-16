export default function Join_Info_First(){
  return(
    <div className="all">
      <div className="info">개인정보를 입력해주세요!</div>
      <div className="container">
        <div className="join_wrap">
          <form>
            <div className="join_form_row">
              <input type="text" placeholder="성명을 입력해주세요"></input>
            </div>
            <div className="join_form_row">
              <input type="text" placeholder="전화번호를 입력해주세요"></input>
            </div>
            <div className="join_form_row">
              <input type="text" placeholder="인증번호를 입력해주세요"></input>
            </div>
             
          </form>
          <div>
            <div className="btn_set join_btn">
              <button className="before_btn">이전</button>
            </div>

            <div className="btn_set join_btn">
              <button className="before_btn">이전</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import "../css/join_info.scss"

export default function Join_PersonalInfo(){
  return(
    <div className="all">
      <div className="container">
        <div className="info">
          개인정보를 입력해주세요 !
        </div>

        <div className="wrap">
          <form className="form_wrap">
            <div className="form_row">
              <div className="form_row_title">이름</div>
              <div className="form_row_content">
                <input placeholder="이름을 입력해주세요"></input>
              </div>
            </div>
            <div className="form_row">
              <div className="form_row_title">전화번호</div>
              <div className="form_row_content include_btn">
                <input placeholder="전화번호를 입력해주세요"></input>
                <button>번호인증</button>
              </div>
            </div>
            <div className="comment_rule">비밀번호는 특수기호 숫자가 반드시 포함됩니다.</div>
            <div className="form_row">
              <div className="form_row_title"></div>
              <div className="form_row_content">
                <input placeholder="인증번호를 입력해주세요"></input>
              </div>
            </div>
          </form>
          <div className="btn_set">
            <button className="btn_before">이전</button>
            <button className="btn_after">다음</button>
          </div>
      </div>

      </div>

      
    </div>
  )
}
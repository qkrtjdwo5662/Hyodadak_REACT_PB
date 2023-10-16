import '../css/login.css'

export default function Login(){
  return(
    <div className='all'>
      <div className='info'>효다닥에 오신것을 환영합니다.</div>
      <div className='container'>
        <div className='login_top'>
          <div className='login_wrap'>
            
            <form>
              <div className="login_form_row">
                <input type="text" placeholder="아이디를 입력해주세요"></input>
              </div>
              <div className="login_form_row">
                <input type="password" placeholder="비밀번호를 입력해주세요"></input>
              </div>
              <div className="">비밀번호는 특수기호 숫자가 반드시 포함됩니다.</div>
              <div className="btn_set login_btn">
                <button className='member_login'>로그인</button>
              </div>
              <div className="btn_set login_btn">
                <button className='kakao_login'>카카오톡 로그인</button>
              </div>
            </form>
          </div>
        </div>
        <hr/>
        <div className='login_bottom'>
          <div className="login_wrap">
            <div className='comment'>효다닥이 처음이신가요?</div>
            <div className="btn_set join_btn">
              <button className="member_join">회원가입</button>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}
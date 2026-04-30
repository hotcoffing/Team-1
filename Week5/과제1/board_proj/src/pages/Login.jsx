import "./Login.scss"
import LoginForm from "../components/LoginForm.jsx";

function Login() {
  return (
    <div className="login">
      <h2>🔐 로그인</h2>
      <p>통신 없이 클라이언트 검증만 수행합니다. <br />
      제출 시 콘솔에 값이 출력되고 홈으로 이동합니다.</p>
      <br />
      <form>
        <LoginForm />
      </form>
    </div>
  );
}   

export default Login;
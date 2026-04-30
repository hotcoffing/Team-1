import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import SignUpForm from '../components/SignUpForm';

function SignUp() {
  return (
    <div>
      <h2>👤 회원가입</h2>
      <p>입력할 때마다 조건을 검사하고, <br /> 문제가 있으면 아래에 메세지를 표시합니다.</p>
      <br />
      <form>
        <SignUpForm />
      </form>
    </div>
  );
}

export default SignUp;
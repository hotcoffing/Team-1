import "./LoginForm.scss";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ userId: "", password: "" });
    const [isErrorPrint, setIsErrorPrint] = useState(false);

    // 입력값이 바뀔 때마다 상태를 업데이트
    const handleUpdate = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // 유효성 검사 변수
    const isIdInvalid = formData.userId.length > 0 && formData.userId.length < 3;
    const isPasswordInvalid = formData.password.length > 0 && formData.password.length < 6;
    const isFormValid = formData.userId.length >= 3 && formData.password.length >= 6;

    const handleSubmit = (e) => {
        e.preventDefault();

        // 모든 조건이 충족되었는지 확인
        if (isFormValid) {
            console.log("로그인 제출 성공:", formData);
            navigate('/');
        } else {
            // 에러 메시지 노출 활성화
            setIsErrorPrint(true); 
        }
    };

    return (
        <>
            <div className="loginFrame">
                <p>아이디</p>
                <input 
                    id="userId" 
                    type="text" 
                    placeholder="아이디" 
                    value={formData.userId} 
                    onChange={handleUpdate} 
                />
                {(isErrorPrint || isIdInvalid) ? (
                    <div className="errorMsg">아이디는 3자 이상이어야 합니다.</div>
                ) : <br />}

                <br />
                <p>비밀번호</p>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="비밀번호" 
                    value={formData.password}
                    onChange={handleUpdate} 
                />
                {(isErrorPrint || isPasswordInvalid) ? (
                    <div className="errorMsg">비밀번호는 6자 이상이어야 합니다.</div>
                ) : <br />}

                <br />
                <button type="submit" onClick={handleSubmit}>로그인</button>
            </div>
            <div className="signupLink">
                <br />
                <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
            </div>
        </>
    );
}

export default LoginForm;
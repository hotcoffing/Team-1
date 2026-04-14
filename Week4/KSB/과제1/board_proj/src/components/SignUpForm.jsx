import "./SignUpForm.scss";     
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        userId: "", 
        email: "",
        password: "",
        passwordConfirm: ""
    });
    const [isErrorPrint, setIsErrorPrint] = useState(false);
    const [isSuccessSignup, setIsSuccessSignup] = useState(false);

    // 입력값이 바뀔 때마다 상태를 업데이트
    const handleUpdate = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // 유효성 검사 변수
    const isIdInvalid = formData.userId.length > 0 && formData.userId.length < 3;
    const isEmailInvalid = formData.email.length > 0 && !/\S+@\S+\.\S+/.test(formData.email);
    const isPasswordInvalid = formData.password.length > 0 && formData.password.length < 6;
    const isPasswordConfirmInvalid = formData.passwordConfirm.length > 0 && formData.password !== formData.passwordConfirm;
    const isFormValid = formData.userId.length >= 3 && /\S+@\S+\.\S+/.test(formData.email) && formData.password.length >= 6 && formData.password === formData.passwordConfirm;

    const handleSubmit = (e) => {
        e.preventDefault();

        // 모든 조건이 충족되었는지 확인
        if (isFormValid) {
            console.log(`가입 제출 성공 >> ID : ${formData.userId}, Email : ${formData.email}, Password : ${formData.password}`);
            
            alert('가입이 완료되었습니다!');

            // 가입 후 로그인으로 이동
            navigate('/login');
        } else {
            alert('가입에 실패했습니다. 다시 시도해주세요.');
            
            // 에러 메시지 노출 활성화
            setIsErrorPrint(true); 
        }
    }

    return (
        <> 
            <div className="signupFrame">
                <p>아이디</p>
                <input 
                    id="userId" 
                    type="text"
                    placeholder="아이디"
                    value={formData.userId}
                    onChange={handleUpdate}
                />
                {(isErrorPrint || isIdInvalid) ? 
                    (<div className="errorMsg">아이디는 영문 숫자 4~20자로 입력해 주세요.</div>) 
                    : <br />
                }
                <br />
                <p>이메일</p>
                <input 
                    id="email"
                    type="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={handleUpdate}
                />
                {(isErrorPrint || isEmailInvalid) ? 
                    (<div className="errorMsg">올바른 이메일 형식이 아닙니다.</div>) 
                    : <br />
                }
                <br />
                <p>비밀번호</p>
                <input 
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                    value={formData.password}
                    onChange={handleUpdate}
                />
                {(isErrorPrint || isPasswordInvalid) ? 
                    (<div className="errorMsg">비밀번호는 8자 이상이며 영문과 숫자를 모두 포함해야 합니다.</div>) 
                    : <br />
                }
                <br />
                <p>비밀번호 확인</p>
                <input 
                    id="passwordConfirm"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={formData.passwordConfirm}
                    onChange={handleUpdate}
                />
                {((isErrorPrint || isPasswordConfirmInvalid)) ? 
                    (<div className="errorMsg">비밀번호가 일치하지 않습니다.</div>) 
                    : <br />
                }
                <br />
                <button type="submit" onClick={handleSubmit}>가입하기</button>
            </div>
            <p><br />이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
        </>
    )
}

export default SignUpForm;
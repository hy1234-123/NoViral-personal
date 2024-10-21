import "../css/LoginPage.css";
import logos from "../assets/noviral_logos.svg";
import googleLogin from "../assets/google-login.svg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styled from "styled-components";
import useAlert from "../hooks/UseAlert";

const StyledInputField = styled(InputField)`
  input {
    padding-top: 4px;
  }
  label {
    padding-top: 8px;
    line-height: 16px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 314px;
  margin-top: 4px;
`;

const CustomCheckbox = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #13161b;
  border-radius: 3px;
  margin-right: 8px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #13161b;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  ${CustomCheckbox}:checked + &::after {
    opacity: 1;
  }

  ${CustomCheckbox}:checked + &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 4px;
    width: 6px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    opacity: 1;
    z-index: 2;
  }
`;

const CheckboxText = styled.span`
  font-weight: regular;
  line-height: 24px;
  font-size: 14px;
  font-family: "Pretendard";
`;

function LoginPage() {
  const showAlert = useAlert();

  return (
    <>
      <div className="login-page-bg">
        <div className="login-page-main">
          <img src={logos} width={136} />
          <StyledInputField
            label="Email"
            placeholder="hello1234@example.com"
            style={{ marginTop: "64px" }}
          />
          <CheckboxContainer>
            <CustomCheckbox type="checkbox" id="idSave" />
            <CheckboxLabel htmlFor="idSave" />
            <CheckboxText>
              <span>아이디 저장</span>
            </CheckboxText>
          </CheckboxContainer>
          <StyledInputField
            type="password"
            label="Password"
            placeholder="· · · · · · · ·"
            style={{ marginTop: "16px" }}
          />
          <Button onClick={showAlert} style={{ marginTop: "40px" }}>
            Login
          </Button>
          <Button
            onClick={showAlert}
            style={{
              marginTop: "24px",
              backgroundColor: "white",
              border: "1px solid #7787A2",
              height: "40px",
            }}
          >
            <img src={googleLogin} />
          </Button>

          <ul>
            <li onClick={showAlert}>회원가입</li>
            <li onClick={showAlert}>비밀번호 재설정</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

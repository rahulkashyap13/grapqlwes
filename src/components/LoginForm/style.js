import styled from 'styled-components';
export const LoginFormContainer = styled.div`
    .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            font-weight: 400;
            line-height: 1.5;
            background-clip: padding-box;
            color: #768192;
            background-color: #fff;
            border: 1px solid #d8dbe0;
            border-radius: 100px;
            width: 100%;
            height: 45px;
            margin-bottom: 25px;
        }
        input::placeholder {
            font-weight: 400;
            margin-bottom: 20px;
            padding-left: 15px;
        }
        .login-btn {
            border-radius: 100px;
            width: 150px;
        }
        .title-login {
            font-size: 26px;
        }
    }
    .login-row {
        border: 1px solid #c5bfbf;
        padding: 30px;
    }
`;
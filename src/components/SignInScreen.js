import styled from 'styled-components';
import {useState} from 'react';

import Logo from '../assets/trackit-logo.png';

function SignInScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    < $LoginScreen >
        <img src={Logo} />
        <form>
            <input type="email" placeholder="email" 
            value={email} onChange={e => setEmail(e.target.value)} required></input>
            <input type="text" onChange={e => setPassword(e.target.value)} placeholder="senha"
            value={password} required></input>
            <button type="submit">Entrar</button>
        </form>
        <p>Não tem uma conta? Cadastre-se!</p>
    </$LoginScreen>
    )
}

export default SignInScreen;

const $LoginScreen = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-lexend);
    font-weight: 400;

    img {
        margin-top: 8%;
        width: 180px;
        margin-bottom: 33px;
    }

    form {
        display:flex;
        flex-direction: column;
        width: 80vw;
        max-width: 450px;
    }

    input {
        margin-bottom: 6px;
        height: 45px;
        font-size: 100%;
        color: grey;
        border: 1px solid var(--color-border-input);
        border-radius: 5px;
        background-color: var(--color-bg-login-footer);

        &::placeholder {
            color: var(--color-text-input);
        }

        &:focus {
            outline: none;
        }
    }

    button {
        margin-bottom: 25px;
        height: 45px;
        border: none;
        border-radius: 4.64px;
        background-color: var(--color-button-link);
        font-size: 100%;
        color: #FFF;

        &:hover {
            cursor: pointer;
            box-shadow: 0px 0px 2px 2px var(--color-logo-header);
            height: 50px;
        }

        &:active {
            background-color: var(--color-logo-header);
        }
    }

    p {
        font-size: 14px;
        color: var(--color-button-link);
        line-height: 17px;
        text-decoration-line: underline;

        &:hover {
            cursor: pointer;
        }

        &:active {
            color: var(--color-logo-header);
        }
    }
`
import styled from 'styled-components';
import axios from 'axios';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import Logo from '../assets/trackit-logo.png';

function SignUpScreen() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const bodyPost = {
        email,
        name,
        image,
        password
    };

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const promise = axios.post(URL, bodyPost);
            promise.then(response => {
                navigate('/');
                setLoading(false);
            });
            promise.catch(error => {
                console.log(error.response);
                alert("Deu erro no seu cadastro! Verifique os dados ou tente novamente mais tarde");
                setLoading(false);
            });
            }, 1500);
    }

    return (
        < $LoginScreen >
            <img src={Logo} />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email}
                onChange={e => setEmail(e.target.value)} disabled={loading} required></input>
                <input type="password" placeholder="senha" value={password}
                onChange={e => setPassword(e.target.value)} disabled={loading} required></input>
                <input type="text" placeholder="nome" value={name}
                onChange={e => setName(e.target.value)} disabled={loading} required></input>
                <input type="url" placeholder="foto" value={image} 
                onChange={e => setImage(e.target.value)} disabled={loading} required></input>
                <button type="submit" className={loading === false ? '' : 'loading'}>
                    {loading === true ? <ThreeDots color='#FFF' height={80} width={80} /> : 'Cadastrar'}
                </button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p> 
            </Link>
        </$LoginScreen>
    )
}

export default SignUpScreen;

const $LoginScreen = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--font-lexend);
    font-weight: 400;

    img {
        margin-top: 5%;
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

        &:disabled {
            background-color: var(--color-input-disabled);
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
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
            box-shadow: 0px 0px 2px 2px var(--color-logo-header);
            height: 50px;
        }

        &:active {
            background-color: var(--color-logo-header);
        }

        &.loading {
            opacity: 0.7;
            pointer-events: none;
        }
    }

    p {
        font-size: 14px;
        color: var(--color-button-link);
        line-height: 17px;
        text-decoration-line: underline;
        margin-bottom: 20%;

        &:hover {
            cursor: pointer;
        }

        &:active {
            color: var(--color-logo-header);
        }
    }
`;
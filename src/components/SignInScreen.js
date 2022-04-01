import styled from 'styled-components';
import axios from 'axios';
import {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ThreeDots} from 'react-loader-spinner';

import Logo from '../assets/trackit-logo.png';
import TokenContext from '../contexts/TokenContext';

function SignInScreen() {

    const {user, setUser} = useContext(TokenContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const bodyPost = {
        email,
        password
    };

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            axios
            .post(URL, bodyPost)
            .then((response) => {
                console.log(response.data)
                setUser({...user, 
                token: response.data.token,
                image: response.data.image,
                name: response.data.name});
                // setUser({...user, image: response.data.image});
                // setUser({...user, name: response.data.name});
                // setUser({...user, token: response.data.token});
                console.log(user);
                navigate("/today");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response);
                alert(
                "Deu erro no seu cadastro! Verifique os dados ou tente novamente mais tarde"
                );
                setLoading(false);
            });
        }, 1500)
    }

    return (
    < $LoginScreen >
        <img src={Logo} alt='logo'/>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" 
            value={email} onChange={e => setEmail(e.target.value)} disabled={loading} required></input>
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="senha"
            value={password} disabled={loading} required></input>
            <button type="submit" className={loading === false ? '' : 'loading'}>
                {loading === false ? 'Entrar' : <ThreeDots color='#FFF' height={80} width={80} />}
            </button>
        </form>
        <Link to="/signup">
            <p>Não tem uma conta? Cadastre-se!</p> 
        </Link>
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
    background-color: #FFF;
    height: 100vh;

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

        &:hover {
            cursor: pointer;
        }

        &:active {
            color: var(--color-logo-header);
        }
    }
`;
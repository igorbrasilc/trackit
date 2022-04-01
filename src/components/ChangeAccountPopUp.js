import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import TokenContext from '../contexts/TokenContext';

function ChangeAccountPopUp(props) {

    const {callback} = props;
    const navigate = useNavigate();
    const {user, setUser} = useContext(TokenContext);

    function changeAccount() {
        setUser({...user,
            token: '',
            image: '',
            todayPercentage: 0,
            name: ''
        });
        navigate('/');
    }

    return (
        <PopUp>
            <img src={user.image} alt='user-photo'/>
            <h1>{user.name}</h1>
            <h2>Deseja sair da conta?</h2>
            <button onClick={() => changeAccount()}>Sim</button>
            <button onClick={() => callback(false)}>Não</button>
        </PopUp>
    )
}

export default ChangeAccountPopUp;

const PopUp = styled.aside`
    width: 70vw;
    height: 70vh;
    background-color: white;
    z-index: 1;
    position: fixed;
    top: 50px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-logo-header);
    background-image: linear-gradient(to right, #F2F2F2 , #52B6FF);

    img {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 18%;
        border-radius: 50%;
        border: 2px solid var(--color-logo-header);
    }

    button {
        width: 50%;
        position: absolute;
        height: 30px;
        background-color: var(--color-logo-header);
        color: #FFF;
        border-radius: 5px;
        border: none;
        font-size: 100%;
        background-image: linear-gradient(to right, #52B6FF,var(--color-logo-header));


        &:first-of-type{
            bottom: 25%;
        }
        &:last-of-type {
            bottom: 15%;
        }

        &:hover {
            cursor: pointer;
        }
    }

    h1 {
        position: absolute;
        top: 3%;
        font-size: 25px;
        font-family: var(--font-playball);
        background-color: white;
        padding: 5px;
        width: 80%;
        text-align: center;
        border-radius: 5px 10px;
        background-image: linear-gradient(to right, var(--color-logo-header), #52B6FF);
        color: white;
    }

    h2 {
        font-size: 18px;
        color: black;
    }

`
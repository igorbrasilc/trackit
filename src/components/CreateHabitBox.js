import styled from 'styled-components';
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner';

import {useState, useContext} from 'react';

import TokenContext from '../contexts/TokenContext';

function CreateHabitBox(props) {

    const [loading, setLoading] = useState(false);
    const {user} = useContext(TokenContext);

    const {callbackBox, inputValue, setInputValue, daysPicked, 
            setDaysPicked, setRender, render} = props;

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };

    const bodyPost = {
        name: inputValue, 
        days: daysPicked 
    };

    function verifySelect(id) {
        for (let i = 0; i < daysPicked.length; i++) {
            if (daysPicked[i] === id) {
                return 'selected'
            }
        }
        return '';
    }

    function handleClick(target) {

        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
            for (let i = 0; i < daysPicked.length; i++) {
                if (daysPicked[i] === parseInt(target.id)) {
                    daysPicked.splice(i, 1);
                }
            }
        } else {
            target.classList.add('selected');
            setDaysPicked([...daysPicked, parseInt(target.id)]);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (bodyPost.days.length !== 0) {
            setLoading(true);
            
            setTimeout(() => {
                axios.
                post(URL, bodyPost, config)
                .then(() => {
                    callbackBox(false);
                    setInputValue('');
                    setLoading(false);
                    setDaysPicked([]);
                    setRender(!render);
                })
                .catch(error => 
                    {
                        console.log(error.response.data.message)
                        alert('Deu um erro na criação, veja o console');
                        setLoading(false);
                    })
            }, 1500);
        } else {
            alert('Por favor, selecione um dia, o hábito não pode ser atemporal');
        }
    }

    return (
        <BoxWrapper>
            <form onSubmit={handleSubmit}>
                <div className="container-input">
                    <input type="text" placeholder="nome do hábito" value={inputValue}
                    onChange={e => setInputValue(e.target.value)} disabled={loading} required/>
                </div>
                <div className={loading === false ? 'day-icons' : 'day-icons loading'}>
                    <p id={0} className={verifySelect(0)} onClick={e => handleClick(e.target)}>D</p>
                    <p id={1} className={verifySelect(1)} onClick={e => handleClick(e.target)}>S</p>
                    <p id={2} className={verifySelect(2)} onClick={e => handleClick(e.target)}>T</p>
                    <p id={3} className={verifySelect(3)} onClick={e => handleClick(e.target)}>Q</p>
                    <p id={4} className={verifySelect(4)} onClick={e => handleClick(e.target)}>Q</p>
                    <p id={5} className={verifySelect(5)} onClick={e => handleClick(e.target)}>S</p>
                    <p id={6} className={verifySelect(6)} onClick={e => handleClick(e.target)}>S</p>
                </div>
                <div className="buttons">
                    <p className="cancel" onClick={() => callbackBox(false)}>Cancelar</p>
                    <button className={loading === false ? 'save' : 'save loading'} type="submit">
                    {loading === false ? <span>Salvar</span> : <ThreeDots color='#FFF' height={50} width={50} />}
                    </button>
                </div>
            </form>
        </BoxWrapper>
    )
}

export default CreateHabitBox;

const BoxWrapper = styled.section`
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 29px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 16px;
        margin-top: 15px;
        
        & .cancel {
            margin-right: 23px;
            border: none;
            background-color: white;
            color: var(--color-button-link);
            font-size: 16px;

            &:hover {
                cursor: pointer;
                font-size: 22px;
            }
        }

        & .save {
            width: 84px;
            height: 35px;
            padding-top: 28px;
            border:none;
            background-color: var(--color-button-link);
            font-size: 16px;
            color: white;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;

            & svg {
                margin-left: 0;
            }

            & span {
                margin-bottom: 28px;
            }

            &:hover {
                cursor: pointer;
                width: 90px;
                height: 42px;
            }

            &.loading {
            opacity: 0.7;
            pointer-events: none;
            }
        }
    }

    .container-input {
        margin-left: 19px;
        margin-right: 19px;
        margin-bottom: 10px;
        margin-top: 18px;

        input {
        width: 100%;
        height: 45px;
        font-size: 100%;
        border-radius: 5px;
        color: var(--color-text-black);
        line-height: 25px;
        border: 1px solid #D4D4D4;
        padding: 5px;

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
        }
    }

    .day-icons {
        margin-left: 19px;
        display: flex;
        align-items: center;
        justify-content: flex-start; 

        &.loading {
            opacity: 0.7;

            & p {
                pointer-events: none;
            }
        }
        
        & p {
            width: 30px;
            height: 28px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid var(--color-text-input);
            margin-right: 1%;
            color: var(--color-text-input); 

            &:hover {
                cursor: pointer;
            }

            &.selected {
                color: white;
                background-color: #CFCFCF;
                border: 1px solid #CFCFCF;
            }
        }
    }
`;
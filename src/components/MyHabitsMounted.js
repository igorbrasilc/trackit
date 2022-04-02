import styled from 'styled-components';
import axios from 'axios';
import {BsTrash} from 'react-icons/bs';

import {useContext} from 'react';

import TokenContext from '../contexts/TokenContext';

function MyHabitsMounted(props) {

    const {habitList, setRender, render} = props;
    const {user} = useContext(TokenContext);

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}` 
        }
    };
    
    function verifySelect(id, days) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === id) {
                return 'selected'
            }
        }
        
        return '';
    }
    
    function handleClick(id) {

    let confirmation = window.confirm('Deseja excluir este hábito? Ele será apagado da sua semana, da sua vida e do seu ser... beba água');
    
    if (confirmation === true) {
        const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    
        axios.delete(URL_DELETE, config)
        .then(() => {
            setRender(!render);
        })
        .catch(error => {
            console.log(error.response);
            alert('Não deu pra deletar esse hábito... Ou é um hábito essencial ou o servidor deu erro ou você não bebeu água');
        })    
    }
    }

    return (
        habitList.map(habit => {
            return (
                <HabitWrapper key={habit.id}>
                    <h3>{habit.name}</h3>
                    <BsTrash className={habit.id} onClick={e => handleClick([...e.target.classList].toString())}/>
                    <div className='day-icons'>
                        <p id={0} className={verifySelect(0, habit.days)}>D</p>
                        <p id={1} className={verifySelect(1, habit.days)}>S</p>
                        <p id={2} className={verifySelect(2, habit.days)}>T</p>
                        <p id={3} className={verifySelect(3, habit.days)}>Q</p>
                        <p id={4} className={verifySelect(4, habit.days)}>Q</p>
                        <p id={5} className={verifySelect(5, habit.days)}>S</p>
                        <p id={6} className={verifySelect(6, habit.days)}>S</p>
                    </div>
                </HabitWrapper>
            )
        })
    )
}

export default MyHabitsMounted;

const HabitWrapper = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #FFF;
    width: 90vw;
    margin-bottom: 10px;
    border-radius: 5px;

    svg {
        font-size: 18px;
        color: var(--color-text-black);
        position: absolute;
        top: 11px;
        right: 10px;

        &:hover {
            cursor: pointer;
            color: var(--color-logo-header);
        }
    }
    h3 {
        color: var(--color-text-black);
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 10px;
        margin-left: 15px;
        margin-top: 13px;
    }

    .day-icons {
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        & p {
            width: 30px;
            height: 28px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid var(--color-text-input);
            margin-right: 1%;
            color: var(--color-text-input); 

            &.selected {
                color: white;
                background-color: #CFCFCF;
                border: 1px solid #CFCFCF;
            }
        }
    } 

`
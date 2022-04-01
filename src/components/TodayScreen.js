import styled from 'styled-components';
import React from 'react';
import DayJS from 'react-dayjs';
import dayjs from 'dayjs';
import {useContext, useEffect, useState} from 'react';
import TokenContext from '../contexts/TokenContext';

import Header from './Header';
import Footer from './Footer';

import Checkmark from '../assets/checkmark.svg';
import axios from 'axios';

function TodayScreen() {

    const {user, setUser} = useContext(TokenContext);
    const [data, setData] = useState([]);
    const [render, setRender] = useState(false);

    const weekdayNumber = dayjs().day();
    const URL_GET = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}` 
        }
    };

    useEffect(() => {
        axios.
        get(URL_GET, config)
        .then(response => {
            if (response.data.length > 0) {
                setData(response.data);
            }
        })
        .catch(error => console.log(error.response));
    }, [render]);

    function getWeekday(weekday) {
        switch (weekday) {
            case 0: return '[Domingo]'
            case 1: return '[Segunda]'
            case 2: return '[Terça]'
            case 3: return '[Quarta]'
            case 4: return '[Quinta]'
            case 5: return '[Sexta]'
            case 6: return '[Sábado]'
        }
    }

    const doneHabits = data.filter(habit => {
        return habit.done === true;
    });

    const percentage = ((doneHabits.length / data.length) * 100).toFixed(0);

    useEffect(() => {
        setUser({...user, todayPercentage: percentage});
    }, [percentage]);

    function handleClick(target) {
        if (target.classList.contains('check')) {

            axios.
            post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${target.id}/uncheck`, {}, config)
            .then(() => {
                setRender(!render);
            })
            .catch(error => console.log(error))
        } else {

            axios.
            post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${target.id}/check`, {}, config)
            .then(() => {
                setRender(!render);
            })
            .catch(error => console.log(error))
        }
    }

    function verifySequence(seq) {
        if (seq === 0) return 0;
        else if (seq === 1) return '1 dia';
        else return `${seq} dias`;
    }

    function verifyRecord(cur, hig) {
        if (cur === 0) return '';
        else if (cur === hig) return 'green-text';
        else return '';
    }

    return (
    < $TodayScreen >
        <Header />
        <section>
            <h2><DayJS format={`${getWeekday(weekdayNumber)}, DD/MM`}/></h2>
            <p className={doneHabits.length === 0 ? '' : 'green-text'}>
                {doneHabits.length === 0 ? 'Nenhum hábito concluído ainda' : 
                `${percentage}% dos hábitos concluídos`}
            </p>
        </section>
        {data.map(habit => {

            const {name, done, currentSequence, highestSequence, id} = habit;

            return (
                <article>
                    <div>
                        <h3>{name}</h3>
                        <p>Sequência atual: <span className={done === false ? '' : 'green-text'}>
                            {verifySequence(currentSequence)}
                        </span></p>
                        <p>Seu recorde: <span className={verifyRecord(currentSequence, highestSequence)}>
                            {verifySequence(highestSequence)}
                        </span></p>
                    </div>
                    <img id={id} src={Checkmark} className={done === true ? 'check' : ''} 
                    alt='checkmark-icon' onClick={e => handleClick(e.target)} />
                </article>
            )
        })}
        <Footer />
    </$TodayScreen>
    )
}

export default TodayScreen;

const $TodayScreen = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-lexend);
    font-weight: 400;

    section {
        margin-top: calc(var(--max-height-header) + 28px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 28px;
        width: 90vw;
        max-width: 600px;

        & h2 {
            font-size: 23px;
            line-height: 29px;
            color: var(--color-logo-header);
        }

        & p {
            font-size: 18px;
            line-height: 22px;
            color: var(--color-text-grey);
        }
    }

    article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FFF;
        width: 90vw;
        max-width: 600px;
        margin-bottom: 10px;
        border-radius: 5px;

        & div {
            margin-left: 15px;
        }

        & img {
            background-color: var(--color-uncheck);
            padding: 20px;
            margin: 13px;
            border-radius: 5px;
            border: 1px solid #e7e7e7;

            &:hover {
                cursor: pointer;
                padding: 23px;
            }

            &.check {
                background-color: var(--color-check);
            }
        }

        &:last-of-type {
            margin-bottom: calc(var(--max-height-footer) + 50px);
        }

        & h3 {
            color: var(--color-text-black);
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 7px;
        }

        & p {
            color: var(--color-text-black);
            font-size: 13px;
            line-height: 16px;
        }
    }

    .green-text {
        color: var(--color-check);
    }
`;
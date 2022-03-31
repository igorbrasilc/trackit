import styled from 'styled-components';
import React from 'react';
import DayJS from 'react-dayjs';
import dayjs from 'dayjs';
import {useContext, useEffect, useState} from 'react';
import TokenContext from '../contexts/TokenContext';
import TodayContext from '../contexts/TodayContext';

import Header from './Header';
import Footer from './Footer';

import Checkmark from '../assets/checkmark.svg';
import axios from 'axios';

function TodayScreen() {

    const {token} = useContext(TokenContext);
    const {setPercentageInfo} = useContext(TodayContext);
    const [data, setData] = useState([]);

    const weekdayNumber = dayjs().day();
    const URL_GET = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    // const URL_POST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check';
    const config = {
        headers: {
            'Authorization': `Bearer ${token}` 
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
    }, []);

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

    const percentage = (doneHabits.length / data.length) * 100;

    useEffect(() => {
        setPercentageInfo(percentage);
    }, [percentage]);

    return (
    < $TodayScreen >
        <Header />
        <section>
            <h2><DayJS format={`${getWeekday(weekdayNumber)}, DD-MM`}/></h2>
            <p>
                {doneHabits.length === 0 ? 'Nenhum hábito concluído ainda' : 
                `${percentage}% dos hábitos concluídos`}
            </p>
        </section>
        {data.map(habit => {
            return (
                <article>
                    <div>
                        <h3>{habit.name}</h3>
                        <p>Sequência atual: <span>{habit.currentSequence}</span></p>
                        <p>Seu recorde: <span>{habit.highestSequence}</span></p>
                    </div>
                    <img src={Checkmark} className={habit.done === true ? 'check' : ''} 
                    alt='checkmark-icon'/>
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
`;
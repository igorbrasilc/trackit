import styled from 'styled-components';
import React from 'react';
import DayJS from 'react-dayjs';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';

import Header from './Header';
import Footer from './Footer';

import Checkmark from '../assets/checkmark.svg';

function TodayScreen() {

    const weekdayNumber = dayjs().day();

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

    return (
    < $TodayScreen >
        <Header />
        <section>
            <h2><DayJS format={`${getWeekday(weekdayNumber)}, DD-MM`}/></h2>
            <p>Nenhum hábito concluído ainda</p>
        </section>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
        <article>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </div>
            <img src={Checkmark} alt='checkmark-icon'/>
        </article>
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
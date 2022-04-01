import styled from 'styled-components';
import { IoIosAdd } from 'react-icons/io';

import {useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import CreateHabitBox from './CreateHabitBox';


function HabitScreen() {

    const [creationBox, setCreationBox] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [daysPicked, setDaysPicked] = useState([]);

    return (
        <>
            <Header />
            <HabitScreenWrapper>
                <div>
                    <h1>Meus hábitos</h1>
                    <span onClick={() => setCreationBox(true)} disabled={creationBox}>
                        <IoIosAdd />
                    </span>
                </div>
                {creationBox === false ? <></> : 
                <CreateHabitBox callbackBox={setCreationBox} inputValue={habitName} 
                setInputValue={(value) => setHabitName(value)}
                daysPicked={daysPicked} setDaysPicked={setDaysPicked}/>}
                
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitScreenWrapper>
            <Footer />
        </>
    )
}

export default HabitScreen;

const HabitScreenWrapper = styled.main`
    margin-top: calc(var(--max-height-header) + 25px);
    margin-bottom: calc(var(--max-height-footer) + 40px);
    margin-left: 17px;
    margin-right: 17px;
    font-family: var(--font-lexend);
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        margin-bottom: 28px;

        & h1 {
            font-size: 23px;
            line-height: 29px;
            color: var(--color-logo-header);
        }

        & span {
            width: 40px;
            height: 35px;
            background-color: var(--color-button-link);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4.64px;

            &:hover {
                cursor: pointer;
                width: 45px;
                height: 40px;
            }
        }

        & svg {
            font-size: 27px;
            color: white;
            font-weight: 400;
        }
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: var(--color-text-black)
    }
`
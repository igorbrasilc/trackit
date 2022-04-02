import styled from 'styled-components';
import axios from 'axios';
import { IoIosAdd } from 'react-icons/io';

import {useState, useContext, useEffect} from 'react';

import Header from './Header';
import Footer from './Footer';
import CreateHabitBox from './CreateHabitBox';
import MyHabitsMounted from './MyHabitsMounted';
import TokenContext from '../contexts/TokenContext';


function HabitScreen() {

    const {user} = useContext(TokenContext);

    const [creationBox, setCreationBox] = useState(false);
    const [render, setRender] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [daysPicked, setDaysPicked] = useState([]);
    const [userHabitList, setUserHabitList] = useState([]);

    const URL_GET = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}` 
        }
    };

    useEffect(() => {
        axios.
        get(URL_GET, config)
        .then(response => {
            console.log(response.data);
            setUserHabitList(response.data);
        })
    }, [render])

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
                {2 === 3 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                :
                <MyHabitsMounted habitList={userHabitList} setRender={setRender} />}
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
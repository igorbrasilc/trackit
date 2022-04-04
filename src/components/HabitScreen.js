import styled from 'styled-components';
import axios from 'axios';
import { IoIosAdd } from 'react-icons/io';
import {ThreeDots} from 'react-loader-spinner';

import {useState, useContext, useEffect} from 'react';

import Header from './Header';
import Footer from './Footer';
import CreateHabitBox from './CreateHabitBox';
import MyHabitsMounted from './MyHabitsMounted';
import TokenContext from '../contexts/TokenContext';


function HabitScreen() {

    const {user, setUser} = useContext(TokenContext);

    const [creationBox, setCreationBox] = useState(false);
    const [render, setRender] = useState(false);
    const [habitName, setHabitName] = useState('');
    const [daysPicked, setDaysPicked] = useState([]);
    const [userHabitList, setUserHabitList] = useState([]);
    const [loading, setLoading] = useState(false);

    const URL_GET_HABITS = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}` 
        }
    };

    useEffect(() => {
        
        setLoading(true);

        setTimeout(() => {
            axios.
            get(URL_GET_HABITS, config)
            .then(response => {
                setUserHabitList(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                alert('Não foi possivel criar o hábito... verifique o console');
                setLoading(false);
            })
        }, 800);

    }, [render]);

    function renderController() {
        if (loading === true) return <ThreeDots color='#126BA5' height={80} width={80} className="loading-svg" />;
        else if (userHabitList.length === 0) return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>;
        else return <MyHabitsMounted habitList={userHabitList} setRender={setRender} render={render} />;
    }

    function creationBoxController() {
        if (creationBox === false) return <></>;
        else return <CreateHabitBox callbackBox={setCreationBox} inputValue={habitName} 
        setInputValue={(value) => setHabitName(value)}
        daysPicked={daysPicked} setDaysPicked={setDaysPicked} setRender={setRender}
        render={render}/>;
    }

    const renderHabits = renderController();
    const renderCreationBox = creationBoxController();

    return (
        <>
            <Header />
            <$HabitScreenWrapper>
                <div>
                    <h1>Meus hábitos</h1>
                    <span onClick={() => setCreationBox(true)} disabled={creationBox}>
                        <IoIosAdd className="add-icon" />
                    </span>
                </div>
                {renderCreationBox}
                {renderHabits}
            </$HabitScreenWrapper>
            <Footer />
        </>
    )
}

export default HabitScreen;

const $HabitScreenWrapper = styled.main`
    margin-top: calc(var(--max-height-header) + 25px);
    margin-bottom: calc(var(--max-height-footer) + 40px);
    margin-left: 17px;
    margin-right: 17px;
    font-family: var(--font-lexend);
    display: flex;
    flex-direction: column;

    svg {
        margin-left: 40%;
    }

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

        & .add-icon {
            font-size: 27px;
            color: white;
            font-weight: 400;
            margin-left: 0;
        }
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: var(--color-text-black)
    }
`
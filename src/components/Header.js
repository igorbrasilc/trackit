import styled from 'styled-components';
import {useContext, useState} from 'react';

import TokenContext from '../contexts/TokenContext';

import ChangeAccountPopUp from './ChangeAccountPopUp';

function Header() {

    const {user} = useContext(TokenContext);
    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <HeaderWrapper>
                <h1>TrackIt</h1>
                <img src={user.image} onClick={() => setPopUp(true)} alt='user-image' disabled={popUp} />
            </HeaderWrapper>
            {popUp === true ? <ChangeAccountPopUp callback={setPopUp} /> : <></>}
        </>
    )
}

export default Header;

const HeaderWrapper = styled.header`
    z-index: 1;
    width: 100vw;
    height: auto;
    max-height: var(--max-height-header); 
    background-color: var(--color-logo-header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin: 10px;
        margin-right: 15px;
        border: 2px solid white;

        &:hover {
            width: 200px;
            height: 200px;
            margin-top: 150px;
            margin-left: -20px;
            cursor: pointer;
        }
    }

    h1 {
        font-family: var(--font-playball);
        font-size: 39px;
        line-height: 49px;
        color: #FFF;
        margin-left: 10px;
    }
`
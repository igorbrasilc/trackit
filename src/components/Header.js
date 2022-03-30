import styled from 'styled-components';
import {useContext} from 'react';

import ImageContext from '../contexts/ImageContext';

function Header() {

    const {image} = useContext(ImageContext);

    return (
        <HeaderWrapper>
            <h1>TrackIt</h1>
            <img src={image} alt='user-image'/>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.header`
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
    }

    h1 {
        font-family: var(--font-playball);
        font-size: 39px;
        line-height: 49px;
        color: #FFF;
        margin-left: 10px;
    }
`
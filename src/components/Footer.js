import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer() {

    const navigate = useNavigate();

    return (
        <FooterWrapper>
                <p onClick={() => navigate('/habits')}>Hábitos</p>
                <span onClick={() => navigate('/today')}>
                    <CircularProgressbar
                        value={0}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: '#52B6FF',
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </span>
                <p onClick={() => navigate('/history')}>Histórico</p>
        </FooterWrapper>
    )
}

export default Footer;

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-bg-login-footer);
    width: 100vw;
    height: auto;
    max-height: var(--max-height-footer);
    display: flex;
    align-items: center;
    justify-content: space-around;

    & span {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
            height: 120px;
        }
    }

    & p {
        font-size: 18px;
        line-height: 22px;
        color: var(--color-button-link);

        &:hover {
            cursor: pointer;
            font-size: 25px;
        }
    }
`
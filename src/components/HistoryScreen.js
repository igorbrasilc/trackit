import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

function HistoryScreen() {
    return (
        <>
            <Header />
                <History>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </History>
            <Footer />
        </>
    )
}

export default HistoryScreen;

const History = styled.main`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
margin-left: 15px;
margin-right: 15px;
font-family: var(--font-lexend);
margin-top: calc(var(--max-height-header) + 25px);
margin-bottom: calc(var(--max-height-footer) + 40px);

h1 {
    font-size: 23px;
    line-height: 29px;
    color: var(--color-logo-header);
}

h2 {
    margin-top: 17px;
    font-size: 18px;
    line-height: 22px;
    color: var(--color-text-black);
}
`
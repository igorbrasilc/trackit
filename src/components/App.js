import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ResetCss from '../assets/resetCss';
import GlobalStyle from '../assets/globalStyles';
import TokenContext from '../contexts/TokenContext';
import ImageContext from '../contexts/ImageContext';
import TodayContext from '../contexts/TodayContext';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HabitScreen from './HabitScreen';
import TodayScreen from './TodayScreen';
import HistoryScreen from './HistoryScreen';

function App() {

    const [token, setToken] = useState(() => {
        const saved = localStorage.getItem('token');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [image, setImage] = useState('');
    const [percentageInfo, setPercentageInfo] = useState(0);

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    return (
        <>
        <ResetCss />
        <GlobalStyle />
        <TokenContext.Provider value={{ token, setToken }}>
            <ImageContext.Provider value={{ image, setImage }}>
                <TodayContext.Provider value={{ percentageInfo, setPercentageInfo }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<SignInScreen />} />
                            <Route path='/signup' element={<SignUpScreen />} />
                            <Route path='/habits' element={<HabitScreen />} />
                            <Route path='/today' element={<TodayScreen />} />
                            <Route path='/history' element={<HistoryScreen />} />
                        </Routes>
                    </BrowserRouter>
                </TodayContext.Provider>
            </ImageContext.Provider>
        </TokenContext.Provider>
        </>
)
}

export default App;
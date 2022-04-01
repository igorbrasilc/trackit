import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ResetCss from '../assets/resetCss';
import GlobalStyle from '../assets/globalStyles';
import TokenContext from '../contexts/TokenContext';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HabitScreen from './HabitScreen';
import TodayScreen from './TodayScreen';
import HistoryScreen from './HistoryScreen';

function App() {

    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user');
        const initialValue = JSON.parse(saved);
        return initialValue || {
            token: '',
            image: '',
            todayPercentage: 0,
            name: ''
        };
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <>
        <ResetCss />
        <GlobalStyle />
        <TokenContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignInScreen />} />
                    <Route path='/signup' element={<SignUpScreen />} />
                    <Route path='/habits' element={<HabitScreen />} />
                    <Route path='/today' element={<TodayScreen />} />
                    <Route path='/history' element={<HistoryScreen />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
        </>
)
}

export default App;
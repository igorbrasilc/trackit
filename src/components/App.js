import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ResetCss from '../assets/resetCss';
import GlobalStyle from '../assets/globalStyles';
import TokenContext from '../contexts/TokenContext';
import ImageContext from '../contexts/ImageContext';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HabitScreen from './HabitScreen';
import TodayScreen from './TodayScreen';
import HistoryScreen from './HistoryScreen';

function App() {

    const [token, setToken] = useState('');
    const [image, setImage] = useState('');

    return (
        <>
        <ResetCss />
        <GlobalStyle />
        <TokenContext.Provider value={{ token, setToken }}>
            <ImageContext.Provider value={{ image, setImage }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SignInScreen />} />
                        <Route path='/signup' element={<SignUpScreen />} />
                        <Route path='/habits' element={<HabitScreen />} />
                        <Route path='/today' element={<TodayScreen />} />
                        <Route path='/history' element={<HistoryScreen />} />
                    </Routes>
                </BrowserRouter>
            </ImageContext.Provider>
        </TokenContext.Provider>
        </>
)
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ResetCss from '../assets/resetCss';
import GlobalStyle from '../assets/globalStyles';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HabitScreen from './HabitScreen';
import TodayScreen from './TodayScreen';
import HistoryScreen from './HistoryScreen';

function App() {
    return (
    <>
        <ResetCss />
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignInScreen />} />
                <Route path='/signup' element={<SignUpScreen />} />
                <Route path='/habits' element={<HabitScreen />} />
                <Route path='/today' element={<TodayScreen />} />
                <Route path='/history' element={<HistoryScreen />} />
            </Routes>
        </BrowserRouter>
    </>
)
}

export default App;
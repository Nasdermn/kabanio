import { Route, Routes } from 'react-router-dom';
import Cardchanger from './components/Cardchanger/Cardchanger';
import Slider from './components/Slider/Slider';
import Rainboard from './components/Rainboard/Rainboard';
import Minigame from './components/Minigame/Minigame';
import NotFound from './components/NotFound/NotFound';
import Main from './components/Main/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cardchanger' element={<Cardchanger />} />
      <Route path='/slider' element={<Slider />} />
      <Route path='/rainboard' element={<Rainboard />} />
      <Route path='/minigame' element={<Minigame />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

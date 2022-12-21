import { Routes, Route } from 'react-router-dom';

import MainScreen from './screens/MainScreen';
import PartOne from './screens/test/PartOne';
import PartThree from './screens/test/PartThree';
import PartThreeDetail from './screens/test/PartThreeDetail';
import PartTwo from './screens/test/PartTwo';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainScreen />} />
      <Route path='part-one' element={<PartOne />} />
      <Route path='part-two' element={<PartTwo />} />
      <Route path='part-three' element={<PartThree />} />
      <Route path='post/:id' element={<PartThreeDetail />} />
    </Routes>
  );
}

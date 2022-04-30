import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Form from './pages/Form';
import Gallery from './pages/Gallery';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

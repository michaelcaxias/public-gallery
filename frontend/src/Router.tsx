import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Form from './pages/Form';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

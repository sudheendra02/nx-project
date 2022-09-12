// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputForm from '../pages/input-form';
import DisplayForm from '../pages/display';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/display-form" element={<DisplayForm />} />
      </Routes>
    </Router>
  );
}

export default App;

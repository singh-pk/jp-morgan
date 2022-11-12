import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { ROUTES } from 'utils';

import { Header } from 'components';

import './App.scss';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/list');
    }
  }, []);

  return (
    <div className='App'>
      <Header />

      <Routes>
        {ROUTES.map(({ path, element: Element, props }) => (
          <Route path={path} element={<Element {...props} />} key={path} />
        ))}

        <Route path='*' element={<div>404! Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;

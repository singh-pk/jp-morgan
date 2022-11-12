import { Folder } from 'components';

import './App.scss';

const ROOT = 'root';

const App = () => {
  return (
    <div className='App'>
      <Folder name={ROOT} />
    </div>
  );
};

export default App;

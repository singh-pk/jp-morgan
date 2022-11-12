import { Folder, Grid } from 'components';

import './App.scss';

const ROOT = 'root';

const App = () => {
  return (
    <div className='App'>
      <Folder name={ROOT} />

      <Grid name={ROOT} />
    </div>
  );
};

export default App;

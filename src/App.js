import { Fragment } from 'react/cjs/react.development';
import './App.css';
import Main from './components/1.HelloWorld/Main';
import Main2 from './components/2.FunctionalvsClass/Main';

function App() {
  return (
    <Fragment>
      <Main></Main>
      <br/>
      <Main2></Main2>
    </Fragment>
  );
}

export default App;

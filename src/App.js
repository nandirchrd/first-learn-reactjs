import { Fragment } from 'react/cjs/react.development';
import './App.css';
// import Main from './components/1.HelloWorld/Main';
// import Main2 from './components/2.FunctionalvsClass/Main';
// import Main3 from './components/3.JSXvsReact.Create.Element()/Main';
// import Main4 from './components/4.PropsState/Main';
// import Destructuring from './components/5.Destructuring/Destructuring';
// import EventHandling from './components/6.EventHandling/EventHandling';
// import ParentComponent from './components/7.MethodAsProps/ParentComponent';
// import Login from './components/8.ConditionalRendering/FuncLogin';
import NameList from './components/9.ListRenderingKeys/NameList';

function App() {
  return (
    <Fragment>
      {/* <Main></Main>
      <br/>
      <Main2></Main2>
      <br/>
      <Main3></Main3>
      <br/>
      <Destructuring name="Gyda" gender="female" age="19 Years Old">This is children</Destructuring>
      <br/>
      <ParentComponent></ParentComponent>
      <br/>
      <Login></Login>
      <br/> */}

      <NameList></NameList>
    </Fragment>
  );
}

export default App;

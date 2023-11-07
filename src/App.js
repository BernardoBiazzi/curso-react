import './App.css';
import Container from './components/container/container';
import FirstComponent from './components/firstComponent/firstComponent';
import Hooks from './components/hooks/hooks';
import ImageComponent from './components/images/images';
import List from './components/list/list';
import RenderCond from './components/renderCond/renderCond';
import Fragment from './components/fragment/fragment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Curso React</h2>
        <FirstComponent></FirstComponent>
        <ImageComponent></ImageComponent>
        <Hooks></Hooks>
        <List></List>
        <RenderCond x={5} y={3}></RenderCond>
        <Fragment></Fragment>
        <Container>
          <h1>Filho do Container</h1>
        </Container>
      </header>
    </div>
  );
}

export default App;

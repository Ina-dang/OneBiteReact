import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';

const func = () => {
  return "func";
}

function App() {
  const number = 5;

  return (
    <div className="App">
      <MyHeader/>
        <h2>안녕리액트 {func()} </h2>
        <b id='bold_text'>
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      <Counter initialValue={5}/>
      <MyFooter/>
    </div>
  );
}

export default App;

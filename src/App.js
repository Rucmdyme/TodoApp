import './App.css';
import { useState } from 'react';
function App() {
  const clickHandler = () => {
    alert('Hii..')
  };
  const changeState = () => {
    setText({ ...text, profile: 'FrontEnd' })
  };
  const [text, setText] = useState({
    name: 'Abhishek',
    age: 22,
    profile: 'SD1'
  });
  const changeCount = () => {
    setCount(count + 1)
  };
  const [count, setCount] = useState(0);
  return (
    <>
      <Image />
      <Person />
      <Greeting />
      <button type='button' onClick={clickHandler}>
        Click Here
      </button>
      <h2>{text.name}</h2>
      <p>{text.age}</p>
      <p>{text.profile}</p>
      <button type='button' onClick={changeState}>
        Change
      </button>
      <p>{count}</p>
      <button type='button' onClick={changeCount}>
        Counter
      </button>
    </>
  );
}

const Person = () => <h2>Abhishek</h2>
const Greeting = () => (
  <p>Hello There</p>
);
const Image = () => (
  <img src='https://images.pexels.com/photos/17202898/pexels-photo-17202898/free-photo-of-city-street-building-house.jpeg' width={'200px'} alt=' ̰' />
);
export default App;

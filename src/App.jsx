import { useState, useCallback } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import ChildArea from './ChildArea';
import InlineStyle from './components/InlineStyle';
import Router from './router/Router';

const App = () => {
  console.log('app');
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Router />
      </BrowserRouter>
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle />
    </div>
  );
};

export default App;

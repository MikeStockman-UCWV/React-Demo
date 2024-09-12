// src/App.jsx
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, ThemeContext } from './ThemeContext.jsx';
import './App.css';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  // useEffect to apply the theme dynamically to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider>
      <div className="App">
        <h1>React, Redux, and Context API Demo</h1>
        <Counter />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;

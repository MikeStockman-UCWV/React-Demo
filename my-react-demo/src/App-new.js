// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, ThemeContext } from './ThemeContext';
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
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
    // Add to src/App.js inside App component
    React.useEffect(() => {
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

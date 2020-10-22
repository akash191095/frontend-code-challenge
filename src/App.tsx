/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import './App.css';

function App() {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      <h1>Hello from App.js</h1>
    </div>
  );
}

export default App;

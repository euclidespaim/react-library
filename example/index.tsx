import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DsBotao } from '../.';

const App = () => {
  return (
    <div>
      <DsBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

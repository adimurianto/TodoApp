import React from "react";

import { Provider } from 'react-redux';
import store from './app/store';
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Todo/>
      </Provider>
    </div>
  );
}

export default App;

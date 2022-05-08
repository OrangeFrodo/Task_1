import React from 'react';
import InputField from './components/inputField.js';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

const App = () => {
  // Wrap the entire app in Provider
  return (
    <Provider store={store}>
      <div className="App">
        <InputField />
      </div>
    </Provider>
  );
}

export default App;

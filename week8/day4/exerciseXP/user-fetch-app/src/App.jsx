// src/App.jsx
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserData from './Components/UserData';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>User Fetch App</h1>
        <UserData />
      </div>
    </Provider>
  );
};

export default App;
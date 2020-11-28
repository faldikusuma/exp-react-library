import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import PostForm from './component/Postform';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Learn React
        </header>
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;

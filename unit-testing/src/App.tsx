import './App.css';
// import { Languages } from './components/language/Languages';
import UserList from './components/userlist/UserList';

function App() {
  // const langs = ['HTML','CSS','Javascript','React']
  return (
    <div className="App">
      <h1>App</h1>
     {/* <Languages languages={langs}/> */}
     <UserList/>
    </div>
  );
}

export default App;

import './App.css';
// import Todos from './components/Todos';
// import AddTodo from './components/AddTodo';
import AppBgChanger from './components/AppBgChanger';
function App() {
  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white'>
      {/* <h1 className="text-3xl">Learn about Redux ToolKit</h1> */}
      {/* <AddTodo />
      <Todos /> */}
      <AppBgChanger/>
    </div>
  );
}

export default App;

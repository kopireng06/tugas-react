// import logo from './logo.svg';
import './TodoList.css';
import DataList from "./DataList";

function App() {
  return (
    DataList.map(({title,completed,id})=><div key={id} 
    className={"list "+(completed ? 'finished': '')}>{title}</div>)
  );
}

export default App;

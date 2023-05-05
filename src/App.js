import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./ExpenseItem/ExpenseItem"

function App() {
  const LocationOfExpenditure = 'Delhi';

  return (
    <div className="App">
      <ExpenseItem location={LocationOfExpenditure}></ExpenseItem>
    </div>
  );
}

export default App;

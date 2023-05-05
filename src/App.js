import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem"

function App() {
  const expenses = [
    {
      location:'delhi',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      location:'delhi',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      location:'delhi',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
    <h2>Expense Items</h2>
      <ExpenseItem location={expenses[0].location} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem location={expenses[1].location} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem location={expenses[2].location} amount={expenses[2].amount} date={expenses[0].date}></ExpenseItem>
    </div>
  );
}

export default App;

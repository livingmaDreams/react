function ExpenseItem() {
    const LocationOfExpenditure = 'Delhi';
  return (
    <div>
      <h4>Expense Items</h4> <p>Food Rs.10</p>
      <p>Petrol Rs.100</p>
      <p>Movies Rs.200</p>
      <p>{LocationOfExpenditure}</p>
    </div>
  );
}

export default ExpenseItem;

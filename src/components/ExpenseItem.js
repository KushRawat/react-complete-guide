import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 4, 7);
  const expenseTitle = 'Car Insuarance'
  const expenseAmount = 5000

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">5000rs</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

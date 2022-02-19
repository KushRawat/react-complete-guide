import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const saveExpenseFilterHandler = (filter) => {
    setSelectedYear(filter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  // console.log(filteredExpenses)

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpenseFilter={saveExpenseFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

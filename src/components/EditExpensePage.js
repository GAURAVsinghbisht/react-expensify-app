import React from 'react';
import  {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    console.log(props);
  return (
    <div>
        <ExpenseForm
            expense = {props.expense}
            onSubmit = {(expense)=>{
                console.log(expense)
                console.log(props)
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}

        />
        <button onClick={() => {
            let id = props.expense.id;
            props.dispatch(removeExpense({ id}));
            props.history.push('/');
        }}>Remove</button>
    </div>

  );
};
// we can access props here
const mapStateToProps = (state,props) => {
    return{
      expense: state.expenses.find(expense=> expense.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
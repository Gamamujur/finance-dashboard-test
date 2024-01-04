import ExpenseCard from './Atoms/ExpenseCard'
import CardDivider from './Atoms/CardDivider'

const Expenses = () => {
    return (
        <div className="expenses-container">
            <h3>Expenses and income</h3>

            <div className="expenses-card">
                <ExpenseCard title="Expense" percentage="75%" amount="5.653" />
                <CardDivider />
                <ExpenseCard title="Income" percentage="40%" amount="2.656" />
            </div>

            <div className="measure-chart">
                <div className="chart-expense" />
                <div className="chart-income" />
            </div>
        </div>
    );
};

export default Expenses;

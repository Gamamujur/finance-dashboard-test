const ExpenseCard = ({ title, percentage, amount }) => {
    return (
        <div>
            <p className="title-card">{title}</p>
            <p className="percentage">{percentage}</p>
            <small className="small-int">{amount}</small>
        </div>
    );
};

export default ExpenseCard;

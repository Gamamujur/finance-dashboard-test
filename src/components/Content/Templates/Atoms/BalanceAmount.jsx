const BalanceAmount = ({amount}) => {
    return (
        <div className="balance-amount">
            <h5>Your balance is</h5>
            <h1>{amount}</h1>
            <small>Always see your spending updates</small>
        </div>
    );
};

export default BalanceAmount;

import TransactionItem from '../../Atoms/TransactionItem'

const TransactionLists = ({ transactions }) => {
    return (
        <div className="data-transaction">
            {transactions.map((data, index) => (
                <div key={index}>
                    <TransactionItem data={data} />
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default TransactionLists;

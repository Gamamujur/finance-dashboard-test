import data from "../../../data/dummydata";
import MenuDotIcon from "./Atoms/MenuDotIcon";
import TransactionList from './Organisms/Transactions/TransactionLists'

const TransactionContent = () => {
    return (
        <div className="main-transaction">
            <div className="transaction-container">
                <div className="list-transaction">
                    <div className="last-transaction">
                        <h3>Last transactions</h3>
                        <div>
                            <span>Newest</span>
                            <span>Oldest</span>
                        </div>
                    </div>
                    <hr />
                    <TransactionList transactions={data.user} />
                </div>
            </div>
            <div className="analytics">
                <div className="analytics-title">
                    <div className="title-header">
                        <h3>Analytics</h3>
                        <MenuDotIcon />
                    </div>
                    <img src="/chartimg.png" alt="Chart" />
                </div>
            </div>
        </div>
    );
};

export default TransactionContent;

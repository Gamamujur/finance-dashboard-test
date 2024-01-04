import MenuDotIcon from "./MenuDotIcon";

const TransactionItem = ({data}) => {
    return (
        <div className="data-container">
            <div className="data-card">
                <img
                    src={data.img}
                    alt="User Icon"
                    width={40}
                    className="user-icon"
                />
                <div>
                    <h5>{data.username}</h5>
                    <p className="date-text">{data.date}</p>
                </div>
            </div>

            <div className="data-secondary-container">
                <h4>{data.amount}</h4>
                <MenuDotIcon/>
            </div>
        </div>
    );
};

export default TransactionItem;

import menuDot from "../../../assets/dot.svg";
import data from "../../../data/dummydata";
import SpendingList from "./Organisms/SpendingLists";

const Spending = () => {
    return (
        <div className="spending-container">
            <div className="spending-header">
                <h3>Latest Spending</h3>
                <img src={menuDot} alt="Menu Dot" width={20} />
            </div>

            <SpendingList spendingData={data.spending} />

            <div className="view-button-container">
                <button className="view-button">View all</button>
            </div>
        </div>
    );
};

export default Spending;

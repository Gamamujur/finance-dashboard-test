import DateList from "./DateLists";
import ShoppingList from "./ShoppingLists";

const ActivityLists = () => {
    return (
        <div className="list-container">
            <div className="list-heading">
                <h3>List of items to buy</h3>
            </div>
            <DateList date1="Sat, August 12" date2="Sat, September 12" />
            <ShoppingList />
        </div>
    );
};

export default ActivityLists;

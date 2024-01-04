import Checkbox from "../../Atoms/Checkbox";
const ShoppingList = () => {
    return (
        <>
            <div className="shopping-container">
                <div className="shopping-p">
                    <p>0/3</p>&nbsp;<h5>Shopping List</h5>
                </div>
                <h5>+ Add an item</h5>
            </div>
            <div className="checkbox-main">
                <Checkbox label="Macbook" checked />
                <Checkbox label="Motorcycle" />
                <Checkbox label="Bicycle" />
                <Checkbox label="Iphone 14 Pro Max" checked />
            </div>
        </>
    );
};

export default ShoppingList;

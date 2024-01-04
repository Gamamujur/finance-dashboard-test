import MenuDotIcon from "./MenuDotIcon";

const Checkbox = ({ label, checked }) => {
    return (
        <div className="checkbox-container">
            <div>
                <input type="checkbox" defaultChecked={checked} />
                <label>{label}</label>
            </div>
            <MenuDotIcon />
        </div>
    );
};

export default Checkbox;

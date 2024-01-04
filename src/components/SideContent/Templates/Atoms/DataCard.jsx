const DataCard = ({ img, name, date }) => {
    return (
        <div className="data-card">
            <img src={img} alt="Icon" width={40} className="user-icon" />
            <div>
                <h5>{name}</h5>
                <p className="date-text">{date}</p>
            </div>
        </div>
    );
};

export default DataCard;

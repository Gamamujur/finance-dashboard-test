const DateList = ({ date1, date2 }) => {
    return (
        <div className="date-container">
            <div>
                <h2>02:00</h2>
                <span>{date1}</span>
            </div>
            <span>&#62;</span>
            <div>
                <h2>05:00</h2>
                <span>{date2}</span>
            </div>
        </div>
    );
};

export default DateList;

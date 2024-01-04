import visaSvg from "../../../../../assets/visa.svg";

const VisaCard = ({
    initials,
    cardNumber,
    cardHolder,
    expiryDate,
    backgroundImage,
}) => {
    return (
        <div
            className="visa-card"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="visa-heading">
                <h1>{initials}</h1>
                <img src={visaSvg} alt="Visa Logo" width={70} />
            </div>

            <div className="visa-footer">
                <span>{cardNumber}</span>
                <div className="visa-status">
                    <p>{cardHolder}</p>
                    <p>{expiryDate}</p>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;

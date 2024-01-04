import bgImg from "/bg-img.png";
import BalanceAmount from "./Atoms/BalanceAmount";
import BarChartImg from "./Atoms/BarChartImg";
import VisaCard from "./Organisms/Balances/VisaCard";

const BalanceContent = () => {
    return (
        <div className="balance-container">
            <div className="balance-card">
                <BalanceAmount amount="$564" />
                <BarChartImg />
            </div>

            <VisaCard
                initials="S."
                cardNumber="****9838"
                cardHolder="Jhon Demon"
                expiryDate="08/12"
                backgroundImage={bgImg}
            />
        </div>
    );
};

export default BalanceContent;

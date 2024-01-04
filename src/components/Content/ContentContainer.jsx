import ActivityContent from "./Templates/ActivityContent";
import BalanceContent from "./Templates/BalanceContent";
import HeadingContent from "./Templates/HeadingContent";
import TransactionContent from "./Templates/TransactionContent";

const ContentContainer = () => {
    return (
        <div className="content-container">
            <HeadingContent />
            <BalanceContent />
            <ActivityContent/>
            <TransactionContent/>
        </div>
    );
};

export default ContentContainer;

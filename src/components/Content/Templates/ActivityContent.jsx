import ActivityLists from "./Organisms/Activities/ActivityLists";
import ChatLists from "./Organisms/Activities/ChatLists";

const ActivityContent = () => {
    return (
        <div className="activity-container">
            <ActivityLists/>
            <ChatLists/>
        </div>
    );
};

export default ActivityContent;

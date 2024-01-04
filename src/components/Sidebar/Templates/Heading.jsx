import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const Heading = () => {
    return (
        <div>
            <h1>S.</h1>
            <FontAwesomeIcon icon={faMessage} className="message-icon" />
        </div>
    );
};

export default Heading;

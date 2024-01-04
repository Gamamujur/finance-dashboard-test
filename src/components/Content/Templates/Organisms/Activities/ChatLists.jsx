import smileySVG from "../../../../../assets/smiley.svg";
import attachSVG from "../../../../../assets/attach-file.svg";
import Button from "../../Atoms/Button";
const ChatLists = () => {
    return (
        <div className="chat-container">
            <h3>Esther Howard</h3>
            <div className="convo-container">
                <small className="chat-text">Are you ready?</small>
                <img
                    src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1702979970~exp=1702980570~hmac=56dbac86b4a865410143285ac0b641b7ba51877f0c65adfda63b986b348105c5"
                    alt="User"
                    width={40}
                    className="user-icon"
                />
            </div>

            <div className="convo-container-secondary">
                <img
                    src="https://img.freepik.com/free-vector/abstract-hand-drawn-woman-portrait-illustrated_23-2148878220.jpg?w=740&t=st=1704278077~exp=1704278677~hmac=8f801488a15c695188b0b82e80804d8eaa87df7379a85f388bef65f0c00a9895"
                    alt="User"
                    width={40}
                    className="user-icon"
                />
                <small className="chat-text-secondary">
                    I have prepared everything
                </small>
            </div>
            <div className="message-container">
                <input type="text" placeholder="Type your message" />

                <div className="message-footer">
                    <div className="svg-container">
                        <img src={smileySVG} alt="Smiley Icon" width={20} />
                        <img
                            src={attachSVG}
                            alt="Attach File Icon"
                            width={20}
                        />
                    </div>
                    <Button label={"Send now"} />
                </div>
            </div>
        </div>
    );
};

export default ChatLists;

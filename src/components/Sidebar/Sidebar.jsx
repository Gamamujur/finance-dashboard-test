
import Footer from "./Templates/Footer";
import Heading from "./Templates/Heading";
import Menu from "./Templates/Menu";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Heading/>
            <Menu/>
            <Footer/>
        </div>
    );
};

export default Sidebar;

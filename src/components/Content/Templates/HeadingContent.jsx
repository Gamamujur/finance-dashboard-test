import Heading from "./Atoms/Heading";
import SearchIcon from "./Atoms/SearchIcon";

const HeadingContent = () => {
    return (
        <div className="content-heading">
            <Heading
                title="Hello, Jhon .D"
                subtitle="View and control your finances here!"
            />
            <SearchIcon />
        </div>
    );
};

export default HeadingContent;

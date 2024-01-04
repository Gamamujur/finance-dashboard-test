import React from "react";
import DataCard from '../Atoms/DataCard'

const SpendingLists = ({ spendingData }) => {
    return (
        <div>
            {spendingData.map((data, index) => (
                <React.Fragment key={index}>
                    <DataCard
                        img={data.img}
                        name={data.name}
                        date={data.date}
                    />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
};

export default SpendingLists;

import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Details Page - {params.id}</h1>
        </div>
    );
};

export default DetailsPage;

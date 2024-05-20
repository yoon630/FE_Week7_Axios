import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <> 
            <h1>PAGE NOT FOUND</h1>
            <Link to="/"> WILL YOU RETURN TO HOMEPAGE? </Link>
        </>
    );
};

export default NotFound;
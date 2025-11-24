import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <p>Category news - {id}</p>
        </div>
    );
};

export default CategoryNews;
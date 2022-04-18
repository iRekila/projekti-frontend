import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CategoryList({ url, selectedCategory, setSelectedCategory }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            if (json) {
                if (selectedCategory === null) {
                    setSelectedCategory(json[0]);
                }
                setCategories(json);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [selectedCategory])

    function onCategoryChange(e) {
        setSelectedCategory(categories.filter(category => category.id === e));
        console.log(selectedCategory);
    }

    return (
        <select value={selectedCategory?.id} onChange={e => onCategoryChange(e.target.value)} className="mb-4">
            {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    )
}
import React, { useState } from 'react'
import { CardsData } from './cards-Data'

const FilterData = ({setFilteredData}) => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        const value = e.target.value.toLowerCase(); // یوزر ان پٹ لینا
        setInputValue(value); // ان پٹ ویلیو اپڈیٹ کرنا
    
        const filterValue = CardsData.filter((el) =>
          el.paragraph.toLowerCase().includes(value)
        );
        setFilteredData(filterValue);
      };
    return (
        <div>
            <input type='text' value={inputValue} placeholder='Enter text' onChange={handleChange} />
        </div>
    )
}

export { FilterData }

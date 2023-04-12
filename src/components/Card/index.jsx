import { useState } from 'react';
import './card.scss'

const Card = ({ title }) => {
    const [inputValue, setInputValue] = useState(title);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    return (
        <div className='card'>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </div>
    )
}

export default Card
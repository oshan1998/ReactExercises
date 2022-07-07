import './style.css'
import fruits from '../db';
import { useState } from 'react';
import Display from '../displayComponent/display';

function Search (){
    const [itemList,setItemList] = useState(fruits);
    function handleChange(event){
        const fruitName = event.target.value;
        const result = fruits.filter(fruit=> fruit.includes(fruitName.toLowerCase()));
        setItemList(result);
        
        
    }
    return (
        <div className='container'>
            <form className='searchBox'>
                <label className='label'>Search:  </label>
                <input className='input' onChange={handleChange}></input>
            </form>
            <Display list = {itemList}/>
        </div>
    );
}
 export default Search;
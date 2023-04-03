import { useState } from "react";

function SearchBar({onSearch}){
    //setting state initially to empty string
    const [city,setCity]=useState("");
    const changeHandler=(event)=>{
        setCity(event.target.value);
    }

    //city argumnet is passed to searchHandler function as props using onSearch to App.js
    const submitHandler=(event)=>{
        //used to prevent reloading page while submitting
        event.preventDefault();
        onSearch(city);
        setCity("");
    }

    //JSX
    return (
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input placeholder="Enter location..." onChange={changeHandler} value={city}/>
            </form>
        </div>
    );
}
export default SearchBar;


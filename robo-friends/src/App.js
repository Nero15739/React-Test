import React from "react";
import CardList from './cardList';
import { robots } from "./robots";
import SearchBox from './SearchBox';

const state = {
    robots:robots,
    searchfeild:'';
}



const App = () =>{
    return(
        <div className='tc'>
            <h1 className="f1 tc">RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
            
        </div>
    );
}

export default App;
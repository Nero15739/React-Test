import React, {Component} from "react";
import CardList from './cardList';
import { robots } from "./robots";
import SearchBox from './SearchBox';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchField:''
        }

    }

    //this is a event which changes teh displayed list of robots
    //it's run when teh searchbox is changed.
    onSearchChange = (event) => {
        console.log(event.target.value);
        //this sets teh state
        this.setState({searchField: event.target.value})
    }

    render(){
        //this is careting a new var, then runing it through a function which is =>
        //the function rerturns the robot if it includes the searchfield value. compared in lower case
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            
        })
        console.log("renderupdate")
        return(
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
                
            </div>
        );
    }
}

    


export default App;
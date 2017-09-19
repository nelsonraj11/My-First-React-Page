import React from 'react';
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
//const ALBUM_ID = "/photos";
export class Homepage extends React.Component{
    constructor(){
        super();
        this.state = { data:[],
        };
    }

    componentDidMount(){

        fetch(ALBUM_URL)
        .then(results => {
            console.log("Result...")
            console.dir(results)
            return results.json();
        }).then(data => {
            console.dir(data)
           
        })    
    }

    render(){
        return(
            <div>
                {}
            </div>
        )
    }   
    
}
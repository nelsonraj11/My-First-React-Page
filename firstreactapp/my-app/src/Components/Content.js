import React from 'react';
import {Album} from './Album';

const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
// const ALBUM_ID = "/photos";
export class Content extends React.Component{
    constructor(){
        super();
        this.state = { 
            data:[]
        };
    }
    componentDidMount(){
        fetch(ALBUM_URL)
        .then(results => 
          results.json()).then(data => {
            //console.dir(data)
            //console.log("this--", this)  ;            
            this.setState({data:data})  
        })  
    }
    renderAlbum(value){
        //console.log("values",value);
       return <Album albumdetails={value}/>;
    }
    render() {        
        var album = this.state.data.map((value) => this.renderAlbum(value));
        return(
        <div>
            <h2> Albums </h2>
            {album}</div>
        );
        

    } 
}

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Photos} from './Album';

const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";
export class Album extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount(){
        var url = ALBUM_URL + this.props.albumdetails.id + ALBUM_ID;
        fetch(url)
        .then(results => results.json())
        .then(data => {
            console.log("data",data);
            this.setState({data:data[0]})    
        })  
    }
    render(){
        return( 
            <div>
                <div className="col-md-4">
                    <p className="album-title">{this.props.albumdetails.title}</p>  
				    <a href="#" ><img  id = "image"  src={this.state.data.thumbnailUrl}/></a>
                    <Link to = "/Photos/"{...this.props.albumdetails.url}> Photos </Link>
                </div>
            </div>        
        )
    }    
}

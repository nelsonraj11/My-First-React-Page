import React from 'react';
import { Link } from 'react-router-dom'
//import {Photos} from './Photos';

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
            this.setState({data:data[0]}) 
            //console.log("data:",data[0]);
        })  
    }
    render(){
        return( 
            <div>
                <div className="col-md-4">
                    <p className="album-title">{this.props.albumdetails.title}</p>  
                    <Link to = {"/Photos/"+this.props.albumdetails.id}> 
                    <img  id = "image"  src={this.state.data.thumbnailUrl}></img>
                    </Link>
                </div>
            </div>        
        )
    }    
}

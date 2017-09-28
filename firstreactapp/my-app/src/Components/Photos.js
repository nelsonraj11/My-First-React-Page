import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Spinner from 'react-spinkit';
import {Content} from './Content';

const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";

export class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = { loader:true,
        data: []
        }
    }
    componentDidMount(){ 
        var pics = ALBUM_URL + this.props.match.params.id + ALBUM_ID;
        fetch(pics)
        .then(results => results.json())
        .then(data => {
            var temp=[]
            data.map((value) => {
                let photos={original: value.url,
                            thumbnail: value.thumbnailUrl}
                temp.push(photos);
            });
            this.setState({data:temp,loader:false})  
            console.log("array",this.state.data)              
        })  
    } 
render(){
        let load;
            if (this.state.loader) {
                load = <Spinner name="wave" color="blue"/>;
            } else {
                load =  <ImageGallery
                items={this.state.data}
                slideInterval={1500}/>;
            }
    return(  
        <div>
            <h2> Photos </h2>  
                <div className="size"> 
                    {load}
                </div>
            <Link to = {"/Content/"}><button className="button" id ="back"> Back to Album</button></Link>
        </div>
    )           
}
}
 




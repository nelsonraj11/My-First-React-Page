import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
// import React from 'react-dom';
//import Galleria from 'galleria';
import Spinner from 'react-spinkit';
import {Content} from './Content';
//import {Content} from './Content';

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
            this.setState({data:data,loader:false})                
        })  
    }
    // componentWillMount(){

    //     Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    //     Galleria.run('.galleria');

    // }

render(){
    console.log("hi",this.state.data)
    let pics = this.state.data.map((value) => {
         return (
            <div className="col-md-4 well">
                <img  id="photos" src={value.url} />
            </div>
        )
    });
    var load;
        if (this.state.loader) {
            load = <Spinner name="wave" color="blue"/>;
        } else {
            load = pics;
        }
    return(  
        <div className="col-md-12-galleria">
            <h2> Photos </h2> 
            {load}  
            <Link to = {"/Content/"}><button className="button" id ="back"> Back to Album</button></Link>
        </div>
    )
            
}
}

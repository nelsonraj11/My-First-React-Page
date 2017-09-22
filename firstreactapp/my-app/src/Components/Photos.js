import React from 'react';
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";
export class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        var pics = ALBUM_URL + this.props.match.params.id + ALBUM_ID;
        fetch(pics)
        .then(results => results.json())
        .then(data => {
            console.log("data",data);
            this.setState({data:data})    
        })  
    }
    
    render(){

        //return this.state.data.map((value) => this.renderPictures(value));
         return(
            <div className="col-md-4">
                <img  id = "image"  src={this.state.data.url}/>
            </div>
         )
    }    
}

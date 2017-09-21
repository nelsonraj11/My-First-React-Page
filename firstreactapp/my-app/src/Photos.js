import React from 'react';
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";
export class Photos extends React.Component{
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
            this.setState({data:data})    
        })  
    }
    
    render(){
        return( 
                <div className="col-md-4">
                
                </div>
                
        )
    }    
}
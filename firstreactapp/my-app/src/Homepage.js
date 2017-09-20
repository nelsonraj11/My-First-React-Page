import React from 'react';
const ALBUM_URL = "https://jsonplaceholder.typicode.com/albums/";
const ALBUM_ID = "/photos";
export class Homepage extends React.Component{
    constructor(){
        super();
        this.state = { data:[],
        };
    }

    componentDidMount(){
        fetch(ALBUM_URL)
        .then(results => 
          results.json()).then(data => {
            //console.dir(data)
            this.setState({data:data})
          // let Albums = data.map((value,key) => { 
            // console.dir(value.id)

            // .then(Albums => {this.getFirstImage(value.id)
            // })
          // })  
          // this.setState({hi:Albums})
        })  
    }
    // getFirstImage(albumId){
    //   console.log("albumId:" +albumId)
    //   let getPhotos= ALBUM_URL + albumId + ALBUM_ID;
    //   console.dir(getPhotos)
    // }
    render(){
          console.dir(this.state.data)
        return(
            <div>
                {this.state.data}
            </div>
        )
    }   
    
}
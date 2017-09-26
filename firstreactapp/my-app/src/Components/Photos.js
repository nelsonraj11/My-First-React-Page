import React from 'react';
// import React from 'react-dom';
//import Galleria from 'galleria';
//import Spinner from 'react-spinkit';



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
            this.setState({data:data,})       
        })  
    }
    // componentWillMount(){

    //     Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    //     Galleria.run('.galleria');

    // }
    render(){
        var pics = this.state.data.map((value) => {
            return <div className="col-md-4">
                <img  id="photos" src={value.url} />
                </div>
       });
        //console.log(this.state.data)
        return(  
            <div className="col-md-12-galleria">
                <h2> Photos </h2> 
                {pics}
            </div>
        )
    }
}

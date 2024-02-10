import React,{Component} from 'react';
class fourth extends Component{
    constructor(props){
        super(props)
    }
    change=()=>{
        this.setState={
            name: "likki"
        }
    }
    render(){
        return(
            <div>
                <h1>hello {
                    this.state.name}</h1>
            <button>submit</button>
            
            </div>
        )
    }
}
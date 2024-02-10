import React,{ Component } from "react";
class Sixth extends Component{
    constructor(props){
        super(props);
            this.state={
                name:0,
            };
    }
    change = () => {
       this.setState({
        name:this.state.name+1
       });
    };
        render(){
            return(
                <div>
                    <button onClick={this.change}>click</button>
                <h1>hello {this.state.name}</h1>
                </div>
            );
        }
}
export default Sixth;
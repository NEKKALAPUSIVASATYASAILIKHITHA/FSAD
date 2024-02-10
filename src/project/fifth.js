import React,{ Component } from "react";
class Fifth extends Component{
    constructor(props){
        super(props);
            this.state={
                name:"liki",
            };
    }
    change = () => {
        this.setState({name:"sai"});
    };
        render(){
            return(
                <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change}>click</button>
                </div>
            );
        }
}
export default Fifth;
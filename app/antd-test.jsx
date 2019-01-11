import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'antd';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Button>点击</Button>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
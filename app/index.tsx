import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props{
    name:string
}

class App extends React.Component<Props,object>{
    state:object;
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <p>Hello TS react!</p>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
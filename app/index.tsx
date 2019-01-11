import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props{
    content:string
}

class App extends React.Component<Props,object>{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {content} = this.props;
        return (
            <div>
                <p>{content}</p>
            </div>
        );
    }
}

ReactDOM.render(<App content="Hello TS react!"/>,document.getElementById('app'));
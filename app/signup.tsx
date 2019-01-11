import * as React from 'react';
import * as ReactDOM from 'react-dom';
//微软fabric react UI库
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class App extends React.Component<object,object> {
    state:any;
    props:any;
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <PrimaryButton>点击</PrimaryButton>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
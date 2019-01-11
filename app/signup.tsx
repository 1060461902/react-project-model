import * as React from 'react';
import * as ReactDOM from 'react-dom';
//微软fabric react UI库
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

interface Props{

}

class Test extends React.Component<Props,object> {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <PrimaryButton>点击</PrimaryButton>
            </div>
        )
    }
}

ReactDOM.render(<Test/>,document.getElementById('app'));
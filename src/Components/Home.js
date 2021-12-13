import React,{Component} from 'react';
import Title from './Title';
import Display from './Display';

class Home extends Component{
    render(){
        return(
            <div>
            <Title/>
            <Display/>
            </div>
        );
    }
}
export default Home;
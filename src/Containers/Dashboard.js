import React,{Component} from 'react';
import {Styles} from '../StyledComp'

export default class Dashboard extends Component {
    state = { 
        name:'',
        email: '',
        password:''
        
     }

    render() { 
        return (
            <>Dashboard</>
        );
    }
}
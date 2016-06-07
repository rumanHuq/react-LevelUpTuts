import React from 'react';
import {render} from 'react-dom';
import ContactList from './ContactList';

let contacts = [
    { id:1, name : 'ruman', address: 'dhaka' },
    { id:2, name : 'mara', address: 'porvoo' },
    { id:3, name : 'mari', address: 'tornio' }
];

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Contact List</h1>
                <ContactList contacts ={this.props.contacts}/>
            </div>
        );
    }
}

render(<App contacts={contacts}/>,document.getElementById('app'));
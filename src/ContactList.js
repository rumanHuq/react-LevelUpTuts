import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';

class ContactList extends React.Component {
    constructor (){
        super();
        this.state = {
            search : ''
        }
    }
    _onChange(event){
        this.setState({search: event.target.value.substr(0,5)})
    }
    render(){
        return (
            <div>
                {this.props.contacts.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                })}
                <input type="text"
                       value={this.state.search}
                       onChange = {this._onChange.bind(this)}
                       />
            </div>
        );
    }
}

export default ContactList;


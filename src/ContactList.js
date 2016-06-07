import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';

class ContactList extends React.Component {
    render(){
        return (
            <div>
                {this.props.contacts.map((contact)=>{
                    return <Contact contact={contact} key={contact.id}/>
                })}

            </div>
        );
    }
}

export default ContactList;
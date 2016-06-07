import React from 'react';
import {render} from 'react-dom';
import Contact from './Contact';

class ContactList extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            search : '',
            contacts : props.contacts
        }
    }
    _textField(event){
        this.setState({search: event.target.value.substr(0,5)})
    }
    _addContact(event){
        event.preventDefault();
        //this.refs.name.value = input value by ref
        let id =Math.floor(Math.random()*100 + 1),
            name = this.refs.name.value,
            address = this.refs.address.value;
        this.setState({
            contacts : this.state.contacts.concat({id, name, address})
        });
        this.refs.name.value ='';
        this.refs.address.value='';
    }
    render(){
        let filteredContacts = this.state.contacts.filter(
            (contact)=> {
                //this.state.search = input value
                return contact.name.indexOf(this.state.search)!==-1
            }
        );
        return (
            <div>
                <div>
                    <input type="text"
                           placeholder="Search"
                           value={this.state.search}
                           onChange = {this._textField.bind(this)}
                    />
                    <ul>
                        {
                            filteredContacts.map((contact)=>{
                                return <Contact contact={contact} key={contact.id}/>
                            })}
                    </ul>
                </div>
                <form onSubmit={this._addContact.bind(this)}>
                    <input type="text" ref="name"/>
                    <input type="text" ref="address"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default ContactList;

/*
* process one
*   map properties passed down from main.js,
*   pass down props to contact.js
*   call contact.js to invoke Contact to render in V-DOM
*   filter down contacts so that we can take value and check index to return list
*   item.
* */


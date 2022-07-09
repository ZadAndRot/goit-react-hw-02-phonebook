import { Component } from "react";
import styles from "../Contacts/index.module.css"
import Contact from "./contact";
import Filter from "./filter";

class Contacts extends Component{
    handleChange=(e)=>{
        this.props.onFilter(e.target.value)
    }
        
    render(){
        const {filter,contacts}=this.props;
        
        return(
            <div>
    
                <Filter onFilter={this.handleChange} filter={this.state.filter} />
                
                
        
                <ul className={styles.contacts}>
                    
                    {contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map((contact) => {                    
                        return (<Contact 
                                    key={contact.id} 
                                    number={contact.number} 
                                    name={contact.name}/>) 
                    })}
                    
                </ul>
            </div>
            
        )
        
    }
}
export default Contacts;
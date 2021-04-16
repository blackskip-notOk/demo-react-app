import React from "react";

const Ul = ({contacts, className}) => {
    let contactsArray = Array.from(Object.values(contacts));

    let contact = contactsArray.map(contact => {
        if (contact) {
            return <li><a href={contact} target='_blanc'>
                        {contact}
                    </a></li>
        } else return null;
    });

    return (
        <ul className={className}>
            {contact}
        </ul>
    );
}

export default Ul;
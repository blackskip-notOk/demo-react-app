import React from "react";

const Ul = (props) => {
    let contacts = Array.from(Object.values(props.contacts));

    let contact = contacts.map(contact => {
        if (contact) {
            return <li><a href={contact} target='_blanc'>
                        {contact}
                    </a></li>
        } else return null;
    });

    return (
        <ul className={props.className}>
            {contact}
        </ul>
    );
}

export default Ul;
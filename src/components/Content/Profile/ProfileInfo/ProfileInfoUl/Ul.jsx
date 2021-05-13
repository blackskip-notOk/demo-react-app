import React from "react";
import { addPropsInObject } from '../../../../../utils/object-helpers';
import Figure from "../../../../Common/Figure/Figure";
import s from './Ul.module.css';

const Ul = ({contacts, className, contactsIcons}) => {

    const contactsArray = addPropsInObject(contacts, contactsIcons);

    const contact = contactsArray.map(c => {
        let link = Object.values(c.contact)[0];
        let notation = Object.keys(c.contact)[0];
        let icon = Object.values(c.contact)[1];
        if (link) {
            return <li key={c.id} className={s.contactLi}>
                        <Figure icon={icon} className={s.figure} />
                        <a href={link} target='_blanc' className={s.contactLink}>
                            {notation}
                        </a>
                    </li>
        } else return null
    });
    return (
        <ul className={className}>
            {contact}
        </ul>
    );
}

export default Ul;
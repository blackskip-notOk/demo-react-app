import React, { FC } from "react";
import { IContact, IContactIcon, IContacts } from "../../../../../Types/Interfaces";
import { addPropsInObject } from '../../../../../utils/object-helpers';
import Figure from "../../../../Common/Figure/Figure";
import s from './ProfileInfoUl.module.css';

// type Props = {
//     contacts: IContacts
//     className: string
//     contactsIcons: Array<IContactIcon>
// }

// type ContactType = {
//     [propName: string]: string
//     icon: string
// }
// type ContactsType = {
//     readonly id: number
//     contact: ContactType
// }
// interface AddPropsInObject {
//     (contacts: IContacts, contactsIcons: Array<IContactIcon>): Array<ContactsType>
// }
const ProfileInfoUl = React.memo(({contacts, className, contactsIcons}) => {

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
});

export default ProfileInfoUl;
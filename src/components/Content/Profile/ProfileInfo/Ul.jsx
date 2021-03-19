import React from "react";
import Figure from "../../../Common/Figure/Figure";
import s from './Ul.module.css';
import Li from "./Li";

const Ul = (props) => {
    // let contacts = Array.from(Object.values(props.contacts));
    // let contact = contacts.map(c => <Li className={s.figure}
    //     contact={c} />
    // );

    return (
        <ul className={props.className}>
            {/* {contact} */}
            {props.contacts.facebook ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[12].icon} />
                {props.contacts.facebook}
            </li> :
            null}
            {props.contacts.website ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[13].icon} />
                {props.contacts.website}
            </li> :
            null}
            {props.contacts.vk ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[14].icon} />
                {props.contacts.vk}
            </li> :
            null}
            {props.contacts.twitter ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[15].icon} />
                {props.contacts.twitter}
            </li> :
            null}
            {props.contacts.instagram ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[16].icon} />
                {props.contacts.instagram}
            </li> :
            null}
            {props.contacts.youtube ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[17].icon} />
                {props.contacts.youtube}
            </li> :
            null}
            {props.contacts.github ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[18].icon} />
                {props.contacts.github}
            </li> :
            null}
            {props.contacts.mainLink ?
            <li>
                <Figure className={props.figure}
                icon={props.icons[19].icon} />
                {props.contacts.mainLink}
            </li> :
            null}
        </ul>
    );
}

export default Ul;
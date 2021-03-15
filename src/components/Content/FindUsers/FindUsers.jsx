import React from "react";
import User from './User/User';
import s from './FindUsers.module.css';

const FindUsers = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            { id: 1, fullName: 'Luke Skywalker', avatar: { id: 1, src: '../image/avatars/luke.jpg' , alt: 'Luke Skywalker avatar' }, followed: true,  status: 'Тёмная сторона сильнее?', location: { city: 'Mos Espa', planet: 'Tatooine' } },
            { id: 2, fullName: 'Master Yoda', avatar: { id: 2, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar' }, followed: true,  status: 'Да пребудет с тобой сила',  location: { city: 'Swamp', planet: 'Dagobah' } },
            { id: 3, fullName: 'Darth Vader', avatar: { id: 3, src: '../image/avatars/vader.jpg', alt: 'Darth Vader avatar' }, followed: false,  status: 'Ты недооцениваешь мою мощь', location: { city: 'Death Star', planet: 'Open Space' }},
            { id: 4, fullName: 'Darth Maul', avatar: { id: 4, src: '../image/avatars/maul.jpg', alt: 'Darth Maul avatar' }, followed: false,  status: 'Ситхи будут править вновь', location: { city: 'maverick', planet: 'no' }},
            { id: 5, fullName: 'Obi-Wan Cenobi', avatar: { id: 5, src: '../image/avatars/Obiwan.jpg', alt: 'Obi-Wan Cenobi avatar' }, followed: true, status: 'Кто глупее: глупец или глупец, за ним следующий?',  location: { city: 'Mos Espa', planet: 'Tatooine' }},
            { id: 6, fullName: 'Jar Jar Binks', avatar: { id: 6, src: '../image/avatars/Jarjarbinks.jpg', alt: 'Jar Jar Binks avatar' }, followed: false,  status: 'Моя говорить.', location: { city: 'Hidden city', planet: 'Naboo' } }
        ]);
    }

    let user = props.users.map(u => <User key={u.id}
        id={u.id} src={u.avatar.src} alt={u.avatar.alt}
        followed={u.followed} fullName={u.fullName}
        status={u.status} city={u.location.city}
        planet={u.location.planet} follow={props.follow}
        unfollow={props.unfollow} />);

    return (
        <div className={s.div}>
            {user}
        </div>
    );
}

export default FindUsers;
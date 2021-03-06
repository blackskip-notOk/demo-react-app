import yoda from '../image/avatars/yoda.jpg';
import vader from '../image/avatars/vader.jpg';
import maul from '../image/avatars/maul.jpg';
import obi from '../image/avatars/Obiwan.jpg';
import jar from '../image/avatars/Jarjarbinks.jpg';

let state ={
    profilePage: {
        posts: [
            { id: 1, message: "Да пребудет с тобой сила.", likes: 11 },
            { id: 2, message: "Меньше нас, но больше ума.", likes: 999 },
        ],
    },
    messagesPage: {
        contacts: [
            { id: 1, name: 'Master Yoda', avatar: {src: yoda, alt: 'Master Yoda avatar'} },
            { id: 2, name: 'Darth Vader', avatar: {src: vader, alt: 'Darth Vader avatar'} },
            { id: 3, name: 'Darth Maul', avatar: {src: maul, alt: 'Darth Maul avatar'} },
            { id: 4, name: 'Obi-Wan Cenobi', avatar: {src: obi, alt: 'Obi-Wan Cenobi avatar'} },
            { id: 5, name: 'Jar Jar Binks', avatar: {src: jar, alt: 'Jar Jar Binks avatar'} }
        ],
        dialogs: [
            { id: 1, message: "Если вы закончите свое обучение сейчас, если вы выберете быстрый и легкий путь, как сделал Вейдер, вы станете агентом зла." },
            { id: 2, message: "Приучите себя отпускать все, что боитесь потерять." },
            { id: 3, message: "Страх потери — это путь к Темной стороне." },
            { id: 4, message: "Должен быть назван твой страх перед тем, как прогнать его." },
            { id: 5, message: "В конце концов, трусы — это те, кто следует Темной стороне." },
            { id: 6, message: "Всегда есть два, не больше, не меньше. Мастер и ученик." },
        ],
        avatars: [
            { id: 1, src: yoda, alt: 'Master Yoda avatar' },
            { id: 2, src: vader, alt: 'Darth Vader avatar' },
            { id: 3, src: maul, alt: 'Darth Maul avatar' },
            { id: 4, src: obi, alt: 'Obi-Wan Cenobi avatar' },
            { id: 5, src: jar, alt: 'Jar Jar Binks avatar' },
        ]
    },
    friendsPage: {},

    newsPage: {},
    
    navbar: {
        friends: [
            { id: 1, name: 'Master Yoda', avatar: {src: yoda, alt: 'Master Yoda avatar'} },
            { id: 2, name: 'Darth Vader', avatar: {src: vader, alt: 'Darth Vader avatar'} },
            { id: 3, name: 'Darth Maul', avatar: {src: maul, alt: 'Darth Maul avatar'} },
            { id: 4, name: 'Obi-Wan Cenobi', avatar: {src: obi, alt: 'Obi-Wan Cenobi avatar'} },
            { id: 5, name: 'Jar Jar Binks', avatar: {src: jar, alt: 'Jar Jar Binks avatar'} }
        ],
    },
    commonData: {
        avatars: [
            {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
            {id: 2, src: '../image/avatars/vader.jpg.jpg', alt: 'Darth Vader avatar'},
            {id: 3, src: '../image/avatars/maul.jpg.jpg', alt: 'Darth Maul avatar'},
            {id: 4, src: '../image/avatars/Obiwan.jpg.jpg', alt: 'Obi-Wan Cenobi avatar'},
            {id: 5, src: '../image/avatars/yod.jpg', alt: 'Jar Jar Binks avatar'},
        ]
    },
};

export default state;
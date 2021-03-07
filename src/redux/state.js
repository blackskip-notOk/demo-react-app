import yoda from '../image/avatars/yoda.jpg';
import vader from '../image/avatars/vader.jpg';
import maul from '../image/avatars/maul.jpg';
import obi from '../image/avatars/Obiwan.jpg';
import jar from '../image/avatars/Jarjarbinks.jpg';
import logo from '../image/jedi1.png';

let state ={
    common: {
        iconsHeader: [
            { pathway: 'home', icon: 'fab fa-galactic-republic', undertext: 'Home', target: '_self' },
            { pathway: 'groups', icon: 'fab fa-old-republic', undertext: 'Groups', target: '_self' },
            { pathway: 'video', icon: 'fab fa-jedi-order', undertext: 'Video', target: '_self' },
            { pathway: 'notifications', icon: 'fab fa-galactic-senate', undertext: 'Notifications', target: '_self' },
        ],
        search: [
            { icon: "fas fa-jedi", }
        ],
        logo: [
            { src: logo, alt: "site-logo"},
        ],
        icons: [
            { pathway: 'menu', icon: 'fas fa-align-justify', },
            { pathway: 'menu1', icon: 'fas fa-bars', },
            { pathway: 'menu2', icon: '', },
            { pathway: 'message', icon: 'fas fa-comment', },
            { pathway: 'message1', icon: 'far fa-comment', },
            { pathway: 'writeMessage', icon: 'fas fa-comment-dots', },
            { pathway: 'writeMessage1', icon: 'far fa-comment-dots', },
            { pathway: 'dialog', icon: 'fas fa-comments', },
            { pathway: 'dialog1', icon: 'far fa-comments', },
            { pathway: 'hamburger', icon: 'fas fa-hamburger', },
            { pathway: 'heart', icon: 'fas fa-heart', },
            { pathway: 'heart1', icon: 'far fa-heart', },
        ],
        avatars: [
            {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
            {id: 2, src: '../image/avatars/vader.jpg.jpg', alt: 'Darth Vader avatar'},
            {id: 3, src: '../image/avatars/maul.jpg.jpg', alt: 'Darth Maul avatar'},
            {id: 4, src: '../image/avatars/Obiwan.jpg.jpg', alt: 'Obi-Wan Cenobi avatar'},
            {id: 5, src: '../image/avatars/Jarjarbinks.jpg.jpg', alt: 'Jar Jar Binks avatar'},
        ]
    },

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

        lies: [
            { pathway: 'profile', target: '_self', notation: 'Profile' },
            { pathway: 'messages', target: '_self', notation: 'Messages' },
            { pathway: 'friends', target: '_self', notation: 'Friends' },
            { pathway: 'news', target: '_self', notation: 'News' },
        ],
    },
};

export default state;
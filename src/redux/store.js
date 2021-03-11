import yoda from '../image/avatars/yoda.jpg';
import vader from '../image/avatars/vader.jpg';
import maul from '../image/avatars/maul.jpg';
import obi from '../image/avatars/Obiwan.jpg';
import jar from '../image/avatars/Jarjarbinks.jpg';
import logo from '../image/jedi1.png';
import back from '../image/profile-back.jpg';
import profilePageReducer from './ProfilePageReducer';
import messagesPageReducer from './MessagesPageReducer';
import commonReducer from './CommonReducer';
import friendsPageReducer from './FriendsPageReducer';
import navbarReducer from './NavbarReducer';
import newsPageReducer from './NewsPageReducer';

let store = {

    _state: {
        common: {
            iconsHeader: [
                { id: 1, pathway: '/home', icon: 'fab fa-galactic-republic', undertext: 'Home', target: '_self' },
                { id: 2, pathway: '/groups', icon: 'fab fa-old-republic', undertext: 'Groups', target: '_self' },
                { id: 3, pathway: '/video', icon: 'fab fa-jedi-order', undertext: 'Video', target: '_self' },
                { id: 4, pathway: '/notifications', icon: 'fab fa-galactic-senate', undertext: 'Notifications', target: '_self' },
            ],
            search: [
                { id: 1, icon: "fas fa-jedi", }
            ],
            logo: [
                { id: 1, src: logo, alt: "site-logo"},
            ],
            icons: [
                { id: 1, pathway: 'menu', icon: 'fas fa-align-justify', },
                { id: 2, pathway: 'menu1', icon: 'fas fa-bars', },
                { id: 3, pathway: 'menu2', icon: '', },
                { id: 4, pathway: 'message', icon: 'fas fa-comment', },
                { id: 5, pathway: 'message1', icon: 'far fa-comment', },
                { id: 6, pathway: 'writeMessage', icon: 'fas fa-comment-dots', },
                { id: 7, pathway: 'writeMessage1', icon: 'far fa-comment-dots', },
                { id: 8, pathway: 'dialog', icon: 'fas fa-comments', },
                { id: 9, pathway: 'dialog1', icon: 'far fa-comments', },
                { id: 10, pathway: 'hamburger', icon: 'fas fa-hamburger', },
                { id: 11, pathway: 'heart', icon: 'fas fa-heart', },
                { id: 12, pathway: 'heart1', icon: 'far fa-heart', },
            ],
            avatars: [
                {id: 1, src: '../image/avatars/yoda.jpg', alt: 'Master Yoda avatar'},
                {id: 2, src: '../image/avatars/vader.jpg.jpg', alt: 'Darth Vader avatar'},
                {id: 3, src: '../image/avatars/maul.jpg.jpg', alt: 'Darth Maul avatar'},
                {id: 4, src: '../image/avatars/Obiwan.jpg.jpg', alt: 'Obi-Wan Cenobi avatar'},
                {id: 5, src: '../image/avatars/Jarjarbinks.jpg.jpg', alt: 'Jar Jar Binks avatar'},
            ],
        },

        profilePage: {
            background: {id: 1, src: back, alt: 'Profile background'},
            posts: [
                { id: 1, post: "Да пребудет с тобой сила.", likes: 11 },
                { id: 2, post: "Меньше нас, но больше ума.", likes: 999 },
            ],
            newPostText:'Когда девятьсот лет тебе будет, не сможешь хорошо выглядеть, а?',
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
            ],
            newMessageText: 'Размер не имеет значения. Посмотри на меня. По размеру меня судишь, так? Гмм? Гмм. А не должен ты. Ибо мой союзник — Сила, и могущественный союзник она.',
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

            links: [
                { id: 1, pathway: '/profile', target: '_self', notation: 'Profile' },
                { id: 2, pathway: '/messages', target: '_self', notation: 'Messages' },
                { id: 3, pathway: '/friends', target: '_self', notation: 'Friends' },
                { id: 4, pathway: '/news', target: '_self', notation: 'News' },
            ],
        },
    },

    _subscriber() {},

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
        this._state.common = commonReducer(this._state.common, action);
        this._state.friendsPage = friendsPageReducer(this._state.friendsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._state.newsPage = newsPageReducer(this._state.newsPage, action);
        this._subscriber(this._state);
    }

};

export default store;
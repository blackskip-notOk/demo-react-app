import Navbar from './Navbar';
import { connect } from "react-redux";
import { getFriends, getLinks } from '../../redux/NavbarSelectors';

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        links: getLinks(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
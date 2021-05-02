import { connect } from "react-redux";
import { getFriends, getLinks } from '../../redux/Navbar/NavbarSelectors';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        links: getLinks(state),
    };
}

const NavbarContainer = connect(mapStateToProps,{})(Navbar);

export default NavbarContainer;
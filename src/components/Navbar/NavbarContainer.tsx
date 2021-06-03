import { connect } from "react-redux";
import { getFriends, getLinks } from '../../redux/Navbar/NavbarSelectors';
import { AppState } from "../../redux/redux-store";
import Navbar from './Navbar';

const mapStateToProps = (state: AppState) => {
    return {
        friends: getFriends(state),
        links: getLinks(state),
    };
}

// type Props = typeof connector
const connector = connect(mapStateToProps, {})
const NavbarContainer = connector(Navbar);

export default NavbarContainer;
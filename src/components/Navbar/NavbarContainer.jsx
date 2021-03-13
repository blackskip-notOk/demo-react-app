import Navbar from './Navbar';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends,
        links: state.navbar.links
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
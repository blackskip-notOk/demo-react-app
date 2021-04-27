import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getAuthUserId } from "../../redux/Auth/AuthSelectors";
import { getFriends, getLinks } from '../../redux/Navbar/NavbarSelectors';
import { getProfileData } from '../../redux/Profile/ProfileReducer';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        links: getLinks(state),
        authUserId: getAuthUserId(state)
    };
}

const NavbarContainer = compose(connect(mapStateToProps,
    {getProfileData}), withRouter)(Navbar);

export default NavbarContainer;
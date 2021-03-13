import Header from './Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        iconsHeader: state.common.iconsHeader,
        search: state.common.search,
        logo: state.common.logo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
import { connect } from "react-redux";
import Aside from './Aside';

const mapStateToProps = (state) => {
    return {
        advs: state.aside.advs
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside);

export default AsideContainer;
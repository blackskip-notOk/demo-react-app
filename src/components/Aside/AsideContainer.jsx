import { connect } from "react-redux";
import Aside from './Aside';

const mapStateToProps = (state) => {
    return {
        advs: state.aside.advs
    };
}

const AsideContainer = connect(mapStateToProps, {})(Aside);

export default AsideContainer;
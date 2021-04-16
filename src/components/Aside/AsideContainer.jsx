import { connect } from "react-redux";
import { getAdvs } from "../../redux/Aside/AsideSelectors";
import Aside from './Aside';

const mapStateToProps = (state) => {
    return {
        advs: getAdvs(state)
    };
}

const AsideContainer = connect(mapStateToProps, {})(Aside);

export default AsideContainer;
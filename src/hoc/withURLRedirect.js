import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";
import { getAuthUserId } from "../redux/Auth/AuthSelectors";
import { getProfile } from "../redux/Profile/ProfileSelectors";

const mapStateToPropsForRedirect = (state) => ({
    profile: getProfile(state),
    authUserId: getAuthUserId(state)
});

export const withURLRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.profile &&
                (this.props.profile.userId !==
                    parseInt(this.props.match.params.userId, 10))) {
            return <Redirect to={`profile/${this.props.authUserId}`} />
            }

            return <Component {...this.props} />
        }
    }

    let ConnectURLRedirectComponent = compose(connect(mapStateToPropsForRedirect), withRouter)(RedirectComponent);

    return ConnectURLRedirectComponent;
}
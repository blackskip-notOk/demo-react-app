import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getIsAuth } from "../redux/Auth/AuthSelectors";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: getIsAuth(state)
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectAuthRedirectComponent;
}
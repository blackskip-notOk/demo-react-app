import React from "react";
import Input from "../../../../Common/Input/Input";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={this.props.className} key={this.props.userId}>
                <span className={s.spanAbout}>{this.props.aboutMe}</span>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}
                            className={s.span}>
                            {this.props.status || "No Status"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <Input type='text' name='status'
                        placeholder='Add your status'
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                        className={s.input}
                        rows='8'
                        cols='10' />
                }
            </div>
        );
    }
}

export default ProfileStatus;
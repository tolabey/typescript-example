import React from 'react';
import {connect} from "react-redux";
import I from 'immutable';

interface IProps {
    addUser: (userData: IUserData) => any;
    users: any;
    pageId: number;
}

interface IState {
    name: string;
    age: number;
}

interface IUserData {
    name: string;
    age: number;
    id: number;
    pageId: number;
}

class AddUser extends React.PureComponent<IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            name: '',
            age: 0
        }
    }

    render() {

        return (
            <div className="user-container">

                <input
                    type="text"
                    placeholder="name"
                    onChange={(event) => this.setState({ name: event.target.value})}
                    value={this.state.name}
                />

                <input
                    type="number"
                    placeholder="age"
                    onChange={(event) => this.setState({ age: Number(event.target.value)})}
                    value={this.state.age}
                />

                <button
                    onClick={() => this.props.addUser({
                        name: this.state.name,
                        age: this.state.age,
                        id: Math.random(),
                        pageId: this.props.pageId,
                    })}
                >
                    Kaydet
                </button>

                <div className="users">
                    {
                        this.props.users.get(this.props.pageId, I.List()).map((each: any) => (
                            <div key={each.get('id', 0)}>
                                { each.get('name', '') }
                                -
                                { each.get('age', 0) }
                                -
                                { each.get('id', 0) }
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }
}

function mapStateToProps(store: any) {
    console.log('store', store)
    return {
        users: store.get('users', I.List())
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        addUser: (userData: IUserData) => dispatch({ type: 'ADD_USER', data: userData})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

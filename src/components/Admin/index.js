import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const AdminPage = () => (
  <div
    style={{
      marginLeft: "15%",
      marginRight: "15%",
      marginTop: "10%",
    }}
  >
    <h4 className="text-center">List of Users and Requests: </h4>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
    </Switch>
  </div>
);

class UserListBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      usersList.forEach((user) => {
        this.props.firebase.db
          .ref("/user-addins/" + user.uid)
          .on("value", (snapshot) => {
            console.log(snapshot.val());

            const addins = [];

            const addinsKeys = snapshot.forEach((addin) => {
              const userAddin = { ...addin.val(), id: addin.key };
              addins.push(userAddin);

              console.log(addin.key);
              console.log(addin.val());
            });
            user.addins = addins;
            this.setState({
              users: usersList,
            });
          });
      });

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div
        style={{
          position: "center",
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
        }}
      >
        {loading && <div>Loading ...</div>}

        {users.map((user) => (
          <ul>
            <span>
              Tester Name: <strong>{user.username}</strong>
            </span>
            <br />
            <span>
              Tester E-Mail:<strong>{user.email}</strong>
            </span>
            <br />

            <span>
              {/* <Link
                to={{
                  pathname: `${ROUTES.ADMIN}/${user.uid}`,
                  state: { user },
                }}
              >
                Details
              </Link> */}
            </span>
            <div className="table-responsive-md">
              <table className="table-bordered table-secondary ">
                <thead className="table-dark text-center">
                  <tr>
                    <th> Request Title </th>
                    <th> Category</th>
                    <th> Description</th>
                  </tr>
                </thead>
                <tbody>
                  {user.addins &&
                    user.addins.map((addin) => {
                      return (
                        <tr>
                          <td> {addin.title} </td>
                          <td>{addin.category}</td>
                          <td>{addin.description}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </ul>
        ))}
      </div>
    );
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state,
    };
  }

  componentDidMount() {
    if (this.state.user) {
      return;
    }

    this.setState({ loading: true });

    this.props.firebase
      .user(this.props.match.params.id)
      .on("value", (snapshot) => {
        this.setState({
          user: snapshot.val(),
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <div>
        <h2>User ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <span>
              <button type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

const condition = (authUser) => authUser && authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition))(AdminPage);

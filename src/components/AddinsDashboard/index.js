import React, { Component } from "react";
import { compose } from "recompose";
import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class Addins extends Component {
  state = {
    addins: [],

    modalInsert: false,
    modalEdit: false,
    email: "",
    id: "",

    inputsForm: {
      title: "",
      category: "",
      discipline: "",
      description: "",
      year: "",

      selectedOption: "Architectural",
    },
  };

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ id: user.uid, email: user.email });

        this.props.firebase.db
          .ref("/user-addins/" + user.uid)
          .on("value", (snapshot) => {
            const addins = [];

            const addinsKeys = snapshot.forEach((addin) => {
              const userAddin = { ...addin.val(), id: addin.key };
              addins.push(userAddin);
            });
            this.setState({ addins: addins });
          });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  /* <-- functions for Table --> */

  handleEditRequisition(e) {
    let addin = this.state.inputsForm;
    this.props.firebase.db.ref(`/addins/${addin.id}`).set(addin);
    this.props.firebase.db
      .ref(`/user-addins/${this.state.id}/${addin.id}`)
      .set(addin);
    this.setState({ modalEdit: false });
  }
  handleDeleteRequisition(addin) {
    this.props.firebase.db.ref(`/addins/${addin.id}`).remove();
    this.props.firebase.db
      .ref(`/user-addins/${this.state.id}/${addin.id}`)
      .remove();
  }
  closeModal() {
    this.setState({ modalInsert: false });
  }
  /* <-- functions for Table --> */

  /* <-- functions for Modal --> */
  handleChange = (e) => {
    const inputsForm = { ...this.state.inputsForm };
    inputsForm[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ inputsForm });
  };

  handleCreateRequisition() {
    const uid = this.state.id;
    const { inputsForm } = this.state;

    let newAddinKey = this.props.firebase.db.ref().child("addins").push().key;
    let updates = {};
    updates["/addins/" + newAddinKey] = inputsForm;
    updates["/user-addins/" + uid + "/" + newAddinKey] = inputsForm;
    return this.props.firebase.db.ref().update(updates);
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      inputsForm: {
        ...this.state.inputsForm,
        selectedOption: changeEvent.target.value,
      },
    });
  };

  handleCheckSubmit = (changeEvent) => {
    changeEvent.preventDefault();
    console.log("You have submitted:", this.state.inputsForm.selectedOption);
  };

  /* <-- functions for Modal --> */
  render() {
    console.log(`this are my addins`, this.state.addins);
    return (
      <div className="App">
        <div
          style={{
            position: "center",
            width: "70%",
            marginLeft: "15%",
            marginRight: "15%",
            marginTop: "5%",
          }}
        >
          <br />
          <br />
          <button
            className="btn btn-success"
            onClick={() => this.setState({ modalInsert: true })}
          >
            Add your Addin Request
          </button>
          <br />
          <br />

          {/* <-- Table --> */}
          <div className=" header intro-lead-in">Add-in Requests List:</div>
          <table className="table-responsive-xl table-bordered table-hover">
            <thead className="table thead text-center">
              <tr>
                <th>Addin Tester </th>
                <th>Title </th>
                <th>Category</th>
                <th>Discipline</th>
                <th>Description</th>
                <th>Revit Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table tbody">
              {this.state.addins.map((addin, index) => {
                console.log(addin);
                return (
                  <tr key={addin.id}>
                    <td>{this.state.email}</td>

                    <td>{addin.title}</td>
                    <td>{addin.category}</td>
                    <td>{addin.selectedOption}</td>
                    <td>{addin.description}</td>
                    <td>{addin.year}</td>

                    <td>
                      <button
                        className="btn btn-secondary btn-sm mx-2"
                        onClick={() =>
                          this.setState({ modalEdit: true, inputsForm: addin })
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDeleteRequisition(addin)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* </-- Table -->

{/* <-- Modal Insert --> */}
          <Modal isOpen={this.state.modalInsert}>
            <ModalHeader>Fill out the Form for your Addin Request:</ModalHeader>

            <ModalBody>
              <div className="form-group">
                <label>Addin Title: </label>
                <br />
                <input
                  type="textarea"
                  value={this.state.inputsForm.title}
                  className="form-control"
                  name="title"
                  onChange={this.handleChange}
                />
                <br />
                <label>Category: </label>
                <br />
                <input
                  type="text"
                  value={this.state.inputsForm.category}
                  className="form-control"
                  name="category"
                  onChange={this.handleChange}
                />
                <br />
                {/* <-- Radio button --> */}
                <form onSubmit={this.handleCheckSubmit}>
                  <h5>Discipline:</h5>
                  <div className="radio-check">
                    <label>
                      <br />
                      <input
                        type="radio"
                        name="discipline"
                        value="Architectural"
                        checked={
                          this.state.inputsForm.selectedOption ===
                          "Architectural"
                        }
                        className="form-control"
                        onChange={this.handleOptionChange}
                      />
                      Architectural
                    </label>
                  </div>
                  <div className="radio-check">
                    <label>
                      <input
                        type="radio"
                        name="discipline"
                        value="Engineering"
                        checked={
                          this.state.inputsForm.selectedOption === "Engineering"
                        }
                        className="form-control"
                        onChange={this.handleOptionChange}
                      />
                      Engineering
                    </label>
                  </div>
                </form>
                {/* <-- Radio button --> */}
                <br />

                <label>Description: </label>
                <br />
                <input
                  type="textarea"
                  value={this.state.inputsForm.description}
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                />
                <br />
                <label>Revit Compatibility Year: </label>
                <br />
                <input
                  type="number"
                  value={this.state.inputsForm.year}
                  className="form-control"
                  name="year"
                  onChange={this.handleChange}
                />
                <br />
              </div>
            </ModalBody>

            <ModalFooter>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  this.handleCreateRequisition(e);
                  this.closeModal();
                }}
              >
                Insert
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => this.setState({ modalInsert: false })}
              >
                Delete
              </button>
            </ModalFooter>
          </Modal>
          {/* /<-- Modal Insert --> */}

          {/* <-- Modal Edit --> */}
          <Modal isOpen={this.state.modalEdit}>
            <ModalHeader>Edit Your Addin Request:</ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Addin Title: </label>
                <br />
                <input
                  type="text"
                  value={this.state.inputsForm.title}
                  className="form-control"
                  name="title"
                  onChange={this.handleChange}
                />
                <br />

                <label>Category: </label>
                <br />
                <input
                  type="text"
                  value={this.state.inputsForm.category}
                  className="form-control"
                  name="category"
                  onChange={this.handleChange}
                />
                <br />

                {/* <-- Radio button --> */}
                <form onSubmit={this.handleCheckSubmit}>
                  <h4>Discipline:</h4>
                  <div className="radio-check">
                    <label>
                      <br />
                      <input
                        type="radio"
                        name="discipline"
                        value="Architectural"
                        checked={
                          this.state.inputsForm.selectedOption ===
                          "Architectural"
                        }
                        className="form-control"
                        onChange={this.handleOptionChange}
                      />
                      Architectural
                    </label>
                  </div>
                  <div className="radio-check">
                    <label>
                      <br />
                      <input
                        type="radio"
                        name="discipline"
                        value="Engineering "
                        checked={
                          this.state.inputsForm.selectedOption ===
                          "Engineering "
                        }
                        className="form-control"
                        onChange={this.handleOptionChange}
                      />
                      Engineering
                    </label>
                  </div>
                </form>
                {/* <-- Radio button --> */}
                <br />
                <label>Description: </label>
                <br />
                <input
                  type="textarea"
                  value={this.state.inputsForm.description}
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                />
                <br />
                <label> Revit Compatibility Year: </label>
                <br />
                <input
                  type="number"
                  value={this.state.inputsForm.year}
                  className="form-control"
                  name="year"
                  onChange={this.handleChange}
                />
                <br />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-success"
                onClick={(e) => this.handleEditRequisition(e)}
              >
                Submit Changes
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.setState({ modalEdit: false })}
              >
                Delete
              </button>
            </ModalFooter>
          </Modal>
          {/* /<-- Modal Edit --> */}
        </div>
      </div>
    );
  }
}

const condition = (authUser) => !!authUser;
export default compose(withFirebase, withAuthorization(condition))(Addins);

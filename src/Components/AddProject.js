import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { addProject } from "./Redux/Actions/Action";
const AddProject = () => {
  //state change
  const [project, setProject] = useState("");
  const [aoproject, setAO_Project] = useState("");
  const [usecase, setUsecase] = useState("");
  const [usecaseidentifier, setUseCaseidentifier] = useState("");
  const [itbenefit, setITBenefit] = useState("");
  const [addlDetail, setAddlDetail] = useState("");
  const [srecontact, setSREContact] = useState("");
  const [status, setStatus] = useState("");

  //accessing store
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      project,
      aoproject,
      usecase,
      usecaseidentifier,
      itbenefit,
      addlDetail,
      srecontact,
      status,
    };

    dispatch(addProject(data));
    toast.success("Status added successfully!!");
    history.push("/");
  };
  return (
    <div className="container">
      <div className="row">
        <h6 className="text-center">ADD PROJECT DETAILS</h6>
        <div className="row">
          <div className="col-md-8 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Project"
                  className="form-control"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="AO_Project"
                  className="form-control"
                  value={aoproject}
                  onChange={(e) => setAO_Project(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Usecase"
                  className="form-control"
                  value={usecase}
                  onChange={(e) => setUsecase(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="UseCaseidentifier"
                  className="form-control"
                  value={usecaseidentifier}
                  onChange={(e) => setUseCaseidentifier(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ITBenefit"
                  className="form-control"
                  value={itbenefit}
                  onChange={(e) => setITBenefit(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="AddlDetail"
                  className="form-control"
                  value={addlDetail}
                  onChange={(e) => setAddlDetail(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="SREContact"
                  className="form-control"
                  value={srecontact}
                  onChange={(e) => setSREContact(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="Submit"
                  value="Add Project Details"
                  className="btn btn-block btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

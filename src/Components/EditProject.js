import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { updateProject } from "./Redux/Actions/Action";

const EditProject = () => {
  //state change
  const [project, setProject] = useState("");
  const [aoproject, setAO_Project] = useState("");
  const [usecase, setUsecase] = useState("");
  const [usecaseidentifier, setUseCaseidentifier] = useState("");
  const [itbenefit, setITBenefit] = useState("");
  const [addlDetail, setAddlDetail] = useState("");
  const [srecontact, setSREContact] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams(); //access the parameters of the current route

  //accessing store
  const contacts = useSelector((state) => state);
  const history = useHistory();

  const dispatch = useDispatch();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setProject(currentContact.project);
      setAO_Project(currentContact.aoproject);
      setUsecase(currentContact.usecase);
      setUseCaseidentifier(currentContact.usecaseidentifier);
      setITBenefit(currentContact.itbenefit);
      setAddlDetail(currentContact.addlDetail);
      setSREContact(currentContact.srecontact);
      setStatus(currentContact.status);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: parseInt(id),
      project,
      aoproject,
      usecase,
      usecaseidentifier,
      itbenefit,
      addlDetail,
      srecontact,
      status,
    };

    dispatch(updateProject(data));
    toast.success("Updated successfully!!");
    history.push("/");
  };
  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="row">
            <h6 className="text-center">EDIT PROJECT {id} </h6>
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
                      value="Update Project"
                      className="btn btn-dark "
                    />

                    <Link to="/" className="btn btn-danger ml-6">
                      cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Project contact with id {id} not exists{" "}
        </h1>
      )}
    </div>
  );
};

export default EditProject;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProject } from "./Redux/Actions/Action";
const Home = () => {
  const contacts = useSelector((state) => state);
  console.log(contacts); //Getting data from store
  const dispatch = useDispatch();
  const deleteProjects = (id) => {
    dispatch(deleteProject(id));
    toast.success("Deleted successfully!");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-14 my-3 text-end">
          <Link to="/add" className="btn btn-outline-dark">
            Add Project
          </Link>
        </div>

        <div className="col-md-16 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Project</th>
                <th scope="col">AO_Project</th>
                <th scope="col">Usecase</th>
                <th scope="col">UseCaseidentifier</th>
                <th scope="col">ITBenefit</th>
                <th scope="col">AddlDetail</th>
                <th scope="col">SREContact</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  {/* <td>{id+1}</td> */}
                  <td>{contact.id}</td>
                  <td>{contact.project}</td>
                  <td>{contact.aoproject}</td>
                  <td>{contact.usecase}</td>
                  <td>{contact.usecaseidentifier}</td>
                  <td>{contact.itbenefit}</td>
                  <td>{contact.addlDetail}</td>
                  <td>{contact.srecontact}</td>
                  <td>{contact.status}</td>

                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small
                                            btn-primary mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteProjects(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

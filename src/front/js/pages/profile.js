import React, { useState, useEffect, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    if (!store.token) {
      navigate("/login");
    } else {
      actions.getProfile();
    }
  }, []);

  console.log(store.user);

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle img-fluid"
                    style={{ width: "100px" }}
                  />
                </div>
                <h4 className="mb-2">{store.user?.fullname}</h4>
                <p className="text-muted mb-4">
                  @{store.user?.username} <span className="mx-2">|</span>{" "}
                  {store.user?.email}
                </p>
                <div className="mb-4 pb-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-floating"
                  >
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-floating"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-floating"
                  >
                    <i className="fab fa-skype fa-lg"></i>
                  </button>
                </div>
                <Link to="/">
                  <button
                    className="btn btn-primary btn-rounded btn-lg"
                    onClick={() => actions.logout()}
                  >
                    Log out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

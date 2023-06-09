import React, { useState } from "react";
import "./UserForm.css";

export const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    textarea: "",
  });

  const onInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      // [event.target.name] : event.target.value.checked
    });
  };

  const onclick = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <pre>{JSON.stringify(user)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body bg-primary">
                <form>
                  <h1 className="form-head">Registration</h1>

                  <input
                    value={user.username}
                    name={"username"}
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />

                  <input
                    value={user.email}
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                    name={"email"}
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />

                  <input
                    value={user.password}
                    name={"password"}
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                  />

                  <select
                    name="designation"
                    required
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                  >
                    <option value="" disabled selected>
                      Select Designation
                    </option>
                    <option>New Grad Software Engineer </option>
                    <option>Civil Engineering Intern</option>
                    <option>Software Engineering Manager</option>
                    <option>Junior Software Engineer</option>
                    <option>Entry Level Embedded Software Engineer</option>
                  </select>

                  <div
                    className="gender"
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                  >
                    <label> Gender: </label>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="male"
                    />{" "}
                    Male
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="female"
                    />{" "}
                    Female <br />
                  </div>

                  <textarea
                    value={user.textarea}
                    id="textarea"
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                    name={"textarea"}
                    rows="4"
                    cols="50"
                    placeholder="Bio"
                  />

                  <div className="checkbox">
                    <input
                      onChange={(event) => onInputChange(event)}
                      onclick={(event) => onclick(event)}
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value={user.checkbox}
                    />
                    <label for="vehicle1">Accept Terms & Condition</label>
                  </div>

                  <button
                    type="submit"
                    form="form1"
                    className="form-control"
                    onChange={(event) => onInputChange(event)}
                    onclick={(event) => onclick(event)}
                    value="Submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;

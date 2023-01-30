import { useState, useEffect } from "react";
import Cursor from "../src/components/Cursor";
import { getCookie } from "cookies-next";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkTokenExpiration = setInterval(() => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-CSRFToken", "k9PBHG3gDHwt0FVVAf8NPsPI2h84gtim");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        credentials: "include",
      };

      fetch("http://localhost:8000/api/csrf", requestOptions);
    }, 1000 * 60 * 30);
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", `${getCookie("csrftoken")}`);

    var raw = `{"email": "${email}", "password": "${password}"}`;

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      credentials: "include",
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="email"
          className="form-control"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Cursor />
    </>
  );
}

export default login;

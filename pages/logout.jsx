import React from "react";

function logout() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    credentials: "include",
  };
  const result = fetch("http://localhost:8000/api/logout", requestOptions)
    //.then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  return <pre></pre>;
}

export default logout;

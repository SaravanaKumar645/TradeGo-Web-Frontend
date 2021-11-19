const jwt = require("jsonwebtoken");

export default async function isAuthenticated() {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    const user = jwt.decode(token);
    console.log(typeof user);
    console.log(user);
    return user;
  } else {
    return false;
  }
}

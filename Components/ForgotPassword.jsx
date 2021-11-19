import React, { useState, useEffect } from "react";
import styles from "../styles/ForgotPassword.module.css";
import { useRouter } from "next/router";
import Notifications from "./Notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Loader from "./Loader";
import Link from "next/link";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(async () => () => setLoading(false), []);

  const handleSendToken = (e) => {
    setLoading(true);
    e.preventDefault();
    axios({
      url: "http://localhost:4000/api/send-reset-mail",
      method: "POST",
      data: { email: email },
    })
      .then((result) => {
        setLoading(false);
        if (result.status === 200) {
          Notifications.notifySuccess(result.data.msg);
          setToken(result.data.token);
          setToggleForm((value) => !value);
        } else if (result.status === 405) {
          Notifications.notifyError(result.data.msg);
        } else if (result.status === 408) {
          Notifications.notifyError(result.data.msg);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        Notifications.notifyError("Something went wrong.Try again !");
      });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const enteredToken = e.target.token.value;
    if (!email) {
      setToggleForm((value) => !value);
      return Notifications.notifyError(
        "Email not identified. Kindly try again !"
      );
    }
    if (enteredToken === token) {
      setLoading(true);
      axios({
        url: "http://localhost:4000/api/update-user-password",
        method: "POST",
        data: { email: email, token: token, newPassword: password },
      })
        .then((result) => {
          setLoading(false);
          if (result.status === 200) {
            Notifications.notifySuccess(result.data.msg);
            setTimeout(() => {
              router.replace("/login_user");
            }, 3000);
          } else if (result.status === 405) {
            setToggleForm((value) => !value);
            Notifications.notifyError(result.data.msg);
          } else if (result.status === 408) {
            setToggleForm((value) => !value);
            Notifications.notifyError(result.data.msg);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          Notifications.notifyError("Something went wrong.Try again !");
          setToggleForm((value) => !value);
        });
    } else {
      Notifications.notifyError("Secret token is invalid !");
    }
  };
  return (
    <div className={styles.container}>
      <ToastContainer
        style={{ zIndex: "9999" }}
        theme="colored"
        autoClose={5000}
        position="top-right"
      />
      <h1>Change your Password at ease !</h1>
      {!toggleForm && (
        <form className={styles.loginForm} onSubmit={handleSendToken}>
          <p>
            After clicking Submit button you will receive a mail containing a{" "}
            Token . Use it to change your Password !
          </p>
          <input
            type="email"
            required
            autoFocus
            placeholder="Enter your Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
          <a
            className={styles.toggleForm}
            onClick={() => setToggleForm((value) => !value)}
          >
            Already have a Secret Code ? Click here.
            <strong className={styles.toggleFormHR}></strong>
          </a>
        </form>
      )}
      {toggleForm && (
        <form
          autoComplete="off"
          className={styles.loginForm}
          onSubmit={handleUpdatePassword}
        >
          <div className={styles.formIconHeader}>
            <FontAwesomeIcon
              title="Go back"
              className={styles.backIcon}
              icon={faArrowCircleLeft}
              onClick={() => setToggleForm((value) => !value)}
            />
            <p>
              You may have received a Secret Token on your mail, enter it in the
              required field and type in your new password.
            </p>
          </div>
          <input
            type="text"
            required
            autoFocus
            autoComplete="off"
            name="token"
            placeholder="Enter the Secret Token"
          ></input>
          <input
            type="password"
            required
            minLength={5}
            autoComplete="new-password"
            maxLength={10}
            placeholder="Enter your New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Change Password</button>
        </form>
      )}
      <p>
        Go Back to -&ensp;{" "}
        <span onClick={() => router.replace("/login_user")}>
          Login !<strong className={styles.hr}></strong>
        </span>
      </p>
      {isLoading && <Loader />}
    </div>
  );
};

export default ForgotPassword;

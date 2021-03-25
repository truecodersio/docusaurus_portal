import React from "react";
import Layout from "@theme/Layout";

function Login() {
  return (
    <Layout title="Login">
      <main id="loginPage"></main>
      <form className="loginForm card">
        <div className="form-group">
          <h1>Welcome Back!</h1>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="loginEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input type="password" className="form-control" id="loginPassword" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <hr />
        <div className="form-group">
          <p>
            Don't have an account? Contact{" "}
            <a href="mailto:support@truecoders.io">support@truecoders.io</a>.
          </p>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
import React from "react";

const Login = () => {
  return (
    <div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                      <input
                        type="email"
                        placeholder="thisismyemail@gmail.com"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control has-icons-left">
                      <input
                        type="password"
                        placeholder="********"
                        class="input"
                        required
                      />
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      &nbsp;Remember me
                    </label>
                  </div>
                  <div class="field">
                    <button class="button is-dark">Login</button>
                  </div>
                  <p>
                    No account? <a href="/signup">Sign up here!</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
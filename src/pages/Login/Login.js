import { Form, Link } from 'react-router-dom';
import facebook from '../../img/facebook-blue.png';
import styles from './Login.module.scss';
import { useState } from 'react';

const Login = () => {
  const [inputs, setInputs] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const usernameValid = inputs.username.length;
    const passwordValid = inputs.password.length > 5;
    return usernameValid && passwordValid;
  };

  const container = styles.container;
  const section = styles.section;
  const sectionPrimary = styles.sectionPrimary;
  const sectionSecondary = styles.sectionSecondary;
  const formControls = styles.formControls;
  const checkbox = styles.checkbox;
  const submitBtn = styles.submitBtn;
  const divider = styles.divider;
  const fbLoginBtn = styles.fbLoginBtn;
  // const showPasswordBtn = styles.showPasswordBtn;

  return (
    <article className={container}>
      <div className={`${section} ${sectionPrimary}`}>
        <h1>Instagram</h1>
        <Form>
          <div className={formControls}>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username or email"
                onChange={handleChange}
                value={inputs.username}
              />
              <span>Username or email</span>
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={inputs.password}
              />
              <span>Password</span>
              {/* <button className={showPasswordBtn}>Show</button> */}
            </label>
          </div>

          <label className={checkbox}>
            <input type="checkbox" name="saveLogin" />
            Save login info
          </label>
          <button className={submitBtn} disabled={!validateInputs()}>
            Log in
          </button>
        </Form>
        <div className={divider}>
          <span></span>
          OR
          <span></span>
        </div>
        <button className={fbLoginBtn}>
          <img src={facebook} alt="" />
          Log in with Facebook
        </button>
      </div>

      <div className={`${section} ${sectionSecondary}`}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </article>
  );
};

export default Login;

// show button when start typing password
// passwordvisible state variable
// onClick, toggle passwordvisible in state
// rendering button- conditionally show/hide based on passwordvisible
// rendering input- make text visible condiitonally when passwordvisible
//

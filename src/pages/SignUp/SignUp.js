import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import facebook from '../../img/facebook-white.png';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    username: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const togglePasswordVisible = (e) => {
    e.preventDefault();
    const newVisibility = !passwordVisible;
    setPasswordVisible(newVisibility);
  };

  const container = styles.container;
  const section = styles.section;
  const sectionPrimary = styles.sectionPrimary;
  const formControls = styles.formControls;
  const submitBtn = styles.submitBtn;
  const divider = styles.divider;
  const fbLoginBtn = styles.fbLoginBtn;
  const showPasswordBtn = styles.showPasswordBtn;
  const sectionSecondary = styles.sectionSecondary;

  return (
    <article className={container}>
      <div className={`${section} ${sectionPrimary}`}>
        <h1>Instagram</h1>
        <h2>
          <span>Sign up to see photos and videos</span>
          <span>from your friends.</span>
        </h2>
        <button className={fbLoginBtn}>
          <img src={facebook} alt="" />
          Log in with Facebook
        </button>
        <div className={divider}>
          <span></span>
          OR
          <span></span>
        </div>
        <Form>
          <div className={formControls}>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={inputs.email}
              />
              <span>Email</span>
            </label>
            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={handleChange}
                value={inputs.fullname}
              />
              <span>Full name</span>
            </label>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={inputs.username}
              />
              <span>Username</span>
            </label>
            <label htmlFor="password">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={inputs.password}
              />
              <span>Password</span>
              {inputs.password.length > 0 && (
                <button
                  className={showPasswordBtn}
                  onClick={togglePasswordVisible}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              )}
            </label>
          </div>

          <button className={submitBtn} disabled>
            Sign up
          </button>
        </Form>
      </div>

      <div className={`${section} ${sectionSecondary}`}>
        Have an account? <Link to="/login">Log in</Link>
      </div>
    </article>
  );
};

export default SignUp;

// show/hide password button
// input validation with conditionally disabled submit btn
// in-input validation

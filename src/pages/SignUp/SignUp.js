import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import facebook from '../../img/logos/facebook-white.png';
import valid from '../../img/validation/valid.svg';
import invalid from '../../img/validation/invalid.svg';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    username: '',
    password: '',
  });
  const [validateIcons, setValidateIcons] = useState({
    email: false,
    fullname: false,
    username: false,
    password: false,
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

  const showValidateIcons = (input) => {
    if (inputs[input].length === 0) return;
    setValidateIcons({ ...validateIcons, [input]: true });
  };

  const hideValidateIcons = (input) => {
    if (input === 'email' && validateEmail()) return;
    if (input === 'fullname' && validateFullname()) return;
    if (input === 'username' && validateUsername()) return;
    if (input === 'password' && validatePassword()) return;

    setValidateIcons({ ...validateIcons, [input]: false });
  };

  const validateEmail = () =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs.email);

  const validateFullname = () => inputs.fullname.length > 2;

  const validateUsername = () => inputs.username.length > 2;

  const validatePassword = () => inputs.password.length > 5;

  const validateInputs = () => {
    return (
      validateEmail() &&
      validateFullname() &&
      validateUsername() &&
      validatePassword()
    );
  };

  const container = styles.container;
  const section = styles.section;
  const sectionPrimary = styles.sectionPrimary;
  const formControls = styles.formControls;
  const validateIcon = styles.validateIcon;
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
                value={inputs.email}
                onChange={handleChange}
                onFocus={() => hideValidateIcons('email')}
                onBlur={() => showValidateIcons('email')}
              />
              <span>Email</span>
              {validateIcons.email && (
                <img
                  className={validateIcon}
                  src={validateEmail() ? valid : invalid}
                  alt={validateEmail() ? 'valid email' : 'invalid email'}
                />
              )}
            </label>
            <label htmlFor="fullname">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                value={inputs.fullname}
                onChange={handleChange}
                onFocus={() => hideValidateIcons('fullname')}
                onBlur={() => showValidateIcons('fullname')}
              />
              <span>Full name</span>
              {validateIcons.fullname && (
                <img
                  className={validateIcon}
                  src={validateFullname() ? valid : invalid}
                  alt={validateFullname() ? 'valid name' : 'invalid name'}
                />
              )}
            </label>
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={inputs.username}
                onChange={handleChange}
                onFocus={() => hideValidateIcons('username')}
                onBlur={() => showValidateIcons('username')}
              />
              <span>Username</span>
              {validateIcons.username && (
                <img
                  className={validateIcon}
                  src={validateUsername() ? valid : invalid}
                  alt={
                    validateUsername() ? 'valid username' : 'invalid username'
                  }
                />
              )}
            </label>
            <label htmlFor="password">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={inputs.password}
                onChange={handleChange}
                onFocus={() => hideValidateIcons('password')}
                onBlur={() => showValidateIcons('password')}
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
              {validateIcons.password && (
                <img
                  className={validateIcon}
                  src={validatePassword() ? valid : invalid}
                  alt={validateEmail() ? 'valid password' : 'invalid password'}
                />
              )}
            </label>
          </div>

          <button className={submitBtn} disabled={!validateInputs()}>
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

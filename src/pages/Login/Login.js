import { Form, Link } from 'react-router-dom';
import facebook from '../../img/facebook-blue.png';
import styles from './Login.module.scss';

const Login = () => {
  const container = styles.container;
  const section = styles.section;
  const sectionPrimary = styles.sectionPrimary;
  const sectionSecondary = styles.sectionSecondary;
  const formControls = styles.formControls;
  const checkbox = styles.checkbox;
  const divider = styles.divider;
  const fbLoginBtn = styles.fbLoginBtn;

  return (
    <article className={container}>
      <div className={`${section} ${sectionPrimary}`}>
        <h1>Instagram</h1>
        <Form>
          <div className={formControls}>
            <label htmlfor="username">
              <input
                type="text"
                name="username"
                placeholder="Username or email"
              />
              <span>Username or email</span>
            </label>
            <label htmlfor="password">
              <input type="password" name="password" placeholder="Password" />
              <span>Password</span>
            </label>
          </div>

          <label className={checkbox}>
            <input type="checkbox" name="saveLogin" />
            Save login info
          </label>
          <button disabled>Log in</button>
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

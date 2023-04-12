import { Form, Link } from 'react-router-dom';
import facebook from '../../img/facebook-white.png';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const container = styles.container;
  const section = styles.section;
  const sectionPrimary = styles.sectionPrimary;
  const formControls = styles.formControls;
  const divider = styles.divider;
  const fbLoginBtn = styles.fbLoginBtn;
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
            <label htmlfor="email">
              <input type="email" name="email" placeholder="Email" />
              <span>Email</span>
            </label>
            <label htmlfor="fullname">
              <input type="text" name="fullname" placeholder="Full name" />
              <span>Full name</span>
            </label>
            <label htmlfor="username">
              <input type="text" name="username" placeholder="Username" />
              <span>Username</span>
            </label>
            <label htmlfor="password">
              <input type="password" name="password" placeholder="Password" />
              <span>Password</span>
            </label>
          </div>

          <button disabled>Sign up</button>
        </Form>
      </div>

      <div className={`${section} ${sectionSecondary}`}>
        Have an account? <Link to="/login">Log in</Link>
      </div>
    </article>
  );
};

export default SignUp;

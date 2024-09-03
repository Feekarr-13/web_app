import './index.css'; // Pastikan Anda membuat file CSS untuk styling

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link">
          Don&apos;t have an account? <a href="/SignUp">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

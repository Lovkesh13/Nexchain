import "./loginPage.css";

export default function loginPage() {
  return (
    <section id="login-page" className="flex-center">
      <div id="login-container">
        <div id="login-explain">
          <h3>Nexchain</h3>
          <p>
            Supply Chain Management (SCM) is crucial in today’s global economy,
            ensuring the efficient and effective flow of goods, services, and
            information from suppliers to customers. our SCM portal provides
            resources and tools to help streamline these processes, fostering
            innovation and excellence in the field.
          </p>
        </div>

        <form>
          <span>
            <h1>Login</h1>
            <h3>Welcome! Please login to your account</h3>
          </span>

          <span>
            <label htmlFor="">Email</label>
            <input type="text" />
          </span>

          <span>
            <label htmlFor="">Password</label>
            <input type="password" />
          </span>

          <span id="forgot-pwd">Forgot Password?</span>

          <span>
            <button type="button">Login</button>
          </span>
        </form>
      </div>
    </section>
  );
}

import LoginSection from "../components/LoginSection";
import Sidebar from "../components/Sidebar";

function Login() {
  return (
    <LoginSection>
      <Sidebar />

      <form action="">
        <div>
          <h1>Crie sua conta</h1>

          <div>
            <span></span>
            <input type="text" placeholder="Nome" />
          </div>
          <div>
            <span></span>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <span></span>
            <input type="text" placeholder="Senha" />
          </div>
        </div>
        <button>Cadastrar</button>
      </form>
    </LoginSection>
  );
}

export default Login;

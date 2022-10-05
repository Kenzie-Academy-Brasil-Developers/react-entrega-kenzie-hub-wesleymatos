import logo from "../../img/Logo.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <button>Sair</button>
      </nav>
      <header>
        <h1>Olá, Samuel Leão!</h1>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </div>
  );
};

export default HomePage;

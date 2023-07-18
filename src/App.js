import "./style.css";

// Each function in JSX is a component. App is allways the first component.
function App() {
  const appTitle = "Today I Learned";

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share A Fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactsList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>category filter</aside>;
}

function FactsList() {
  return <section>facts list</section>;
}

export default App;

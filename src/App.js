// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>


            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <h1>I want to learn react</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor soluta natus sint beatae eum consequuntur debitis totam magni maxime libero mollitia, facere suscipit. Magnam quam modi laboriosam architecto. Sapiente quae, commodi enim delectus illum corporis molestias voluptas aspernatur fugit quibusdam reprehenderit sunt ab accusamus aliquam possimus necessitatibus cum repellat minus labore facere quam pariatur.</p>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <a className="navbar-brand" href="/">Navbar</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
              <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
        <h4 id="scrollspyHeading1">First heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading4">Fourth heading</h4>
        <p>...</p>
        <h4 id="scrollspyHeading5">Fifth heading</h4>
        <p>...</p>
      </div>
      <div className="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div className="progress">
        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </>
  );
}

export default App;

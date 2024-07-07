// App.jsx
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [theme, setTheme] = useState('light');

  const alterarTemaSite = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <html data-bs-theme={theme}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>replit</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
          <div className="container">
            <button className="btn btn-secondary me-4" id="alterarTemaSite" onClick={alterarTemaSite}>
              <i className={`bi ${theme === 'dark' ? 'bi-brightness-high-fill' : 'bi-moon-fill'}`}></i>
            </button>
            <a className="navbar-brand text-success" href="#"><strong>Viajar é Preciso <i className="bi bi-globe"></i></strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Sobre nós</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Roteiros</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Nacionais</a></li>
                    <li><a className="dropdown-item" href="#">Internacionais</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Depoimentos</a></li>
              </ul>
              <div className="d-flex">
                <a href="0" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Fale Conosco</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Contato</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">Nome</label>
                  <input type="name" className="form-control" id="exampleFormControlInput2" placeholder="Jessica Ferraz" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="inputPhone" className="form-label">Telefone</label>
                  <input type="number" className="form-control" id="inputPhone" placeholder="()" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva sua mensagem."></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
        </div>

        <header className="container my-4">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="text-center pt-5 mt-4">Viajar é Preciso: Descubra o Mundo, Viva Aventuras!</h1>
              <p className="lead text-muted text-center text-md mt-4">Planeje sua viagem conoso</p>
              <div className="text-center text-md-center">
                <button type="button" className="btn btn-outline-success mt-2 ms-4" style={{ fontSize: '2rem' }}>Faça seu orçamento</button>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-4 img-thumbnail">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="StudentStudying.png" className="d-block w-100" alt="vitória régiaa" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/yY4yRq57/aurora.jpg" className="d-block w-100" alt="aurora boreal" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/QxfV31cv/egypt.jpg" className="d-block w-100" alt="Egito" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/qvnfLdBQ/maldives.jpg" className="d-block w-100" alt="Ilhas Maldivas" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/hGbHkbdd/rj.jpg" className="d-block w-100" alt="Rio de Janeiro" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/L5hwgc0t/taj-mahal.jpg" className="d-block w-100" alt="Taj Mahal" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/sDQbjRWy/times-square.jpg" className="d-block w-100" alt="Times Square" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/sXg0tFzk/village.jpg" className="d-block w-100" alt="Vila na Itália" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-8 py-md-11">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card mb-6 mb-md-0" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title text-center text-success" style={{ fontSize: 'x-large' }}>
                      <i className="bi bi-globe"></i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Mundo inteiro</h6>
                    <p className="card-text">Planejamos sua viagem para qualquer lugar do planeta, de destinos exóticos a clássicos.</p>
                    <div className="text-center"><a href="#" className="btn btn-outline-success mt-4">Saiba mais</a></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card mb-6 mb-md-0" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title text-center text-success" style={{ fontSize: 'x-large' }}>
                      <i className="bi bi-bank"></i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Múltiplos Roteiros</h6>
                    <p className="card-text">Oferecemos uma variedade de roteiros que atendem diferentes interesses e orçamentos.</p>
                    <div className="text-center"><a href="#" className="btn btn-outline-success mt-4">Saiba mais</a></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card mb-6 mb-md-0" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title text-center text-success" style={{ fontSize: 'x-large' }}>
                      <i className="bi bi-currency-exchange"></i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Economize Tempo e Dinheiro</h6>
                    <p className="card-text">Garantimos as melhores ofertas e condições para sua viagem, sem complicações.</p>
                    <div className="text-center"><a href="#" className="btn btn-outline-success mt-4">Saiba mais</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="container my-4 border-top">
          <div className="row text-center text-md-left py-4">
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <img src="https://i.postimg.cc/ZKMsF6VS/semfundo.png" height="48" alt="" className="mb-4" />
              <p className="text-muted mb-0">© 2023 Viajar é Preciso. Todos os direitos reservados.</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5>Links Úteis</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">Sobre nós</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Roteiros</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Depoimentos</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5>Redes Sociais</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
                <li className="mb-2"><a href="#" className="text-muted"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
                <li className="mb-2"><a href="#" className="text-muted"><i className="bi bi-twitter me-2"></i>Twitter</a></li>
              </ul>
            </div>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeo8E7I6r6VojoI2+HEvITOnMk66jrSLAxBBhGxM++I1B1wB" crossorigin="anonymous"></script>
      </body>
    </html>
  );
};

export default Home;

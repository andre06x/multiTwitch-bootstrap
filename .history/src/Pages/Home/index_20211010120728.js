import React from 'react';

const Home = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div class="jumbotron mt-5">
        <h1 class="display-4">
          MultiTwitch-Bootstrap!
        </h1>
        <p class="lead">
          Projeto criado para permitir multivisualização de streams da twitch e posteriaomente do youtube, utilizando bootstrap para responsividade, inspirando no multitwitch.
        </p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">

          <div className="row g-3 align-items-center">
            <div class="col-auto">
              <input 
                placeholder="stream1"
                class="form-control" 
              />
            </div>
            <div class="col-auto">
              <input 
                placeholder="stream2"
                class="form-control" 
              />
            </div>
          </div>
          {/* <input type="password" class="form-control" id="exampleInputPassword1" /> */}
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    </div>
  )
}

export default Home;
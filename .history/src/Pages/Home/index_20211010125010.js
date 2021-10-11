import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stream1, setStream1] = useState('');
  const [stream2, setStream2] = useState('');

  return (
    <div className="container d-flex justify-content-center">
      <div class="jumbotron mt-5">
        <h1 class="display-4">
          MultiTwitch-Bootstrap!
        </h1>
        <p class="lead">
          Projeto criado para permitir multivisualização de streams da twitch e posteriaomente do youtube,
          utilizando bootstrap para responsividade, inspirando no multitwitch.
        </p>
        <hr class="my-4" />
        <p>Insira os nomes dos canais abaixo</p>
        <p class="lead">

          <div className="row g-3 align-items-center">
            <div class="col-auto">
              <input
                value={stream1}
                onChange={e => setStream1(e.target.value)}
                placeholder="stream1"
                class="form-control"
              />
            </div>
            <div class="col-auto">
              <input
                value={stream2}
                onChange={e => setStream2(e.target.value)}
                placeholder="stream2"
                class="form-control"
              />
            </div>
            <div class="col-auto">
              <Link
                to={stream1 && stream2 !== '' ? `/stream/${stream1}/${stream2}` : `/stream/${stream1}/${0}`}
                class="btn btn-primary mt-sm-3"
                role="button"
              >
                Ir para live
              </Link>
            </div>
          </div>
          {/* <input type="password" class="form-control" id="exampleInputPassword1" /> */}

        </p>
      </div>
    </div>
  )
}

export default Home;
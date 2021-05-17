const main = document.querySelector('.main');
const header = document.querySelector('.header');

const portfolioTemplate = `
<div class="container">
  <figure class="image-container">
    <picture>
      <a href="https://jett.netlify.app/" target="_blank">
        <img src="./assets/jett_riot.png" alt="">
      </a>
    </picture>
  </figure>

  <div class="data">
    <div>
      <h2>Jett</h2>
      <p>Interfaz de usuario con el que puse en practica el posicionamiento de los elementos.
        el diseño le pertenece a Dmitry Kiiashko y se encuentra <a
          href="https://dribbble.com/shots/10737126-Valorant-Agent-Jett-page-concept-design?utm_source=Clipboard_Shot&utm_campaign=UnEpicKid&utm_content=Valorant%20-%20Agent%20Jett%20page%20concept%20design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=UnEpicKid&utm_content=Valorant%20-%20Agent%20Jett%20page%20concept%20design&utm_medium=Social_Share">aquí.</a>
      </p>
    </div>
  </div>

  </div>
  <div class="container">
  <figure class="image-container">
    <picture>
      <a href="https://song-player.netlify.app/" target="_blank">
        <img src="./assets/audio_player.png" alt="">
      </a>
    </picture>
  </figure>

  <div class="data">
    <div>
      <h2>Song Player</h2>
      <p>
        Es un sencillo reproductor de música. Puedes agregar tus cancines y añadirle una imagen como decoración.
      </p>
    </div>
  </div>

  </div>

  <div class="container">
  <figure class="image-container">
    <picture>
      <a href="https://digitalmovie.netlify.app/" target="_blank">
        <img src="./assets/digital_movie.png" alt="">
      </a>
    </picture>
  </figure>

  <div class="data">
    <div>
      <h2>Digital Movie</h2>
      <p>Es una web en la que se "pueden comprar" películas. Se integró la api de paypal</p>
    </div>
  </div>

  </div>

  <div class="gamesstack">
  <div class="container">
    <figure class="image-container">
      <picture>
        <a href="https://gamesstack.netlify.app/" target="_blank">
          <img src="./assets/games_stack.png" alt="">
        </a>
      </picture>
    </figure>

  </div>

  <div class="data">
    <div>
      <h2>Games Stack</h2>
      <p>El diseño le pertenece Alex Marais, puedes encontrar el diseño origial <a
          href="https://dribbble.com/shots/8183070-Game-Store-App?utm_source=Clipboard_Shot&utm_campaign=AlexMarais&utm_content=Game%20Store%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AlexMarais&utm_content=Game%20Store%20App&utm_medium=Social_Share">aquí</a>
      </p>
    </div>
  </div>
</div>`;

const aboutTemplate = `
<div class="about">
  <div class="about-image-container">
    <figure>
      <img src="./assets/alejandro_leyva.png" alt="">
    </figure>
  </div>
  <div class="about-data">
    <h2>Quien Soy</h2>
    <p>Soy Alejandro Leyva Mendoza, estudié la Licenciatura en Biología en la Facultad de Biología de la Universidad
    Autónoma de Sinaloa. Actualmente estudio el desarrollo web por mi cuenta, por medio de cursos, libros o blogs y
    la documentación oficial.</p>
  </div>
</div>
`;

window.addEventListener('load', () => {
  if(location.hash === '') {
    main.innerHTML = portfolioTemplate;
  } else if (location.hash === '#/about') {
    main.innerHTML = aboutTemplate;
  }
});

window.addEventListener('hashchange', () => {
  if(location.hash === '') {
    main.innerHTML = portfolioTemplate;
  } else if (location.hash === '#/about') {
    main.innerHTML = aboutTemplate;
  }
});
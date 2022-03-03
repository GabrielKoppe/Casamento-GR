function TextDay() {
    return (
      <div className="adjust_text">
        <p dir="ltr">O nosso casamento est&aacute; chegando, e com muita alegria convidamos voc&ecirc; para esse dia. Ser&aacute; uma tarde muito feliz em um espa&ccedil;o com bastante &aacute;rea verde.</p>
        <p dir="ltr">&nbsp;</p>
        <p dir="ltr">Acontecer&aacute; no s&aacute;bado, 27 de agosto de 2022, &agrave;s 14h, no Pagum Jardins.</p>
        <p dir="ltr"><em>Estrada do Pontal, 1395 - casa 1 - Recreio dos Bandeirantes, RJ.</em></p>
        <p dir="ltr">&nbsp;</p>
        <p dir="ltr">Aproveite para entrar no clima e escute a playlist do casamento no Spotify.</p>
        
        <div className="btn_day">
          <a href="https://goo.gl/maps/yvoDbTXFcJZf54vc8" target="_blank" rel="noreferrer">
            <button type="button" className="btn">Maps</button>
          </a>
          <a href="https://open.spotify.com/playlist/2FYxETIC9IR21oN6SUEMtg?si=d1bc3d3ba5274d8d" target="_blank" rel="noreferrer">
            <button type="button" className="btn">Spotify</button>
          </a>
        </div>
      </div>
    );
  }
  
  export default TextDay;
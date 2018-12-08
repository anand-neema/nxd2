import { createGlobalStyle } from 'styled-components';
import img from './images/banner.jpg';


const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #ffff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


  .topHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .logo {
      flex: auto;
  }

  .logo a {
      color: #fff;
      text-decoration: none;
      font-size: 35px;
  }
  .leftMenu {
    flex:auto;
  }

  .rightMenu {
    flex:auto;
  }
  .bgImage {
    background-image:url(${img});
    background-size:cover;
    padding-bottom: 250px;
    padding-top: 20px;
  }
`;

export default GlobalStyle;

  import './App.css';
  import { createGlobalStyle, ThemeProvider } from 'styled-components';
  import solarizedLight from "react95/dist/themes/solarizedLight";
  import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
  import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
  import Canvas from "./components/Canvas";
  import {TabsContent} from "./components/TabsContent";

  const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'ms_sans_serif';
      src: url('${ms_sans_serif}') format('woff2');
      font-weight: 400;
      font-style: normal
    }
    @font-face {
      font-family: 'ms_sans_serif';
      src: url('${ms_sans_serif_bold}') format('woff2');
      font-weight: bold;
      font-style: normal
    }
    body {
      font-family: 'ms_sans_serif';
    }
  `;

  function App() {
    return (
      <div>
        <GlobalStyles />
        <ThemeProvider theme={solarizedLight}>
          <div className="App">
            <header className="App-header">
              {Canvas()}
              {TabsContent()}
            </header>
          </div>
        </ThemeProvider>
      </div>
    );
  }

  export default App;

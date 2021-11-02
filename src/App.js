import { ThemeProvider } from '@mui/system';
import Sample from './Sample';
import { theme as bob } from './theme';

function App() {
  return (
    <ThemeProvider theme={bob}>
      <div className="App">
        <h1>MUI Themes and Styles</h1>
        <Sample />
      </div>
    </ThemeProvider>
  );
}

export default App;

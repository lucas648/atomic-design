import Main from './templates/main';
import { route } from './pages'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Main route={route}/>
      </div>
    </Router>
  );
}

export default App;

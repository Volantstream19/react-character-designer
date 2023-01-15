import './App.css';
import Controls from './components/Controls/Controls.js';
import Editor from './components/Editor/Editor.js';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Display />
      <Editor />
    </div>
  );
}

export default App;

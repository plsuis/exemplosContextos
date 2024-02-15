import './App.css';
import Component1 from './componente/Component1';
import Component2 from './componente/Component2';
import Component5 from './componente/Component5';
import ComponenteTheme from './componente/ComponenteTheme';
import DousContextos from './componente/DousContextos';

function App() {
  return (
    <div className="App">
      <Component1>
        <Component5 />
        <Component2 /> 
      </Component1>
      {/* <ComponenteTheme /> */}
      {/* <DousContextos /> */}
    </div>
  );
}

export default App;

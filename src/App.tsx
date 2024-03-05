import React from 'react';
import { Button } from './components/common/Button';

const App = () => {
  return (
    <div className="App">
      <Button
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        Realizar Prueba
      </Button>
    </div>
  );
};

export default App;

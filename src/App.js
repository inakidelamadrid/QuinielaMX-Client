import React from 'react';
//import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { Columns, Container } from 'react-bulma-components';

function App() {
  return (
    <div className="QuinielaUI">
      <div className="App-body">
        <Container>
          <Columns>
            <Columns.Column size="one-fifth">20% width of container</Columns.Column>
            <Columns.Column>80% width of container</Columns.Column>
          </Columns>
        </Container>
      </div>
    </div>
  );
}

export default App;

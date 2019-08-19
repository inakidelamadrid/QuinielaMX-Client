import React from 'react';
//import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { Columns, Container, Section, Hero, Heading } from 'react-bulma-components';

function App() {
  return (
    <div className="QuinielaUI">
      <div className="App-body">
        <Container>
          <Section>
            <Hero color="primary">
              <Hero.Body>
                <Container>
                  <Heading>
                    Quiniela Acumulativa Liga MX
                  </Heading>
                  <Heading subtitle size={3}>
                    Jornada 5
                  </Heading>
                </Container>
              </Hero.Body>
            </Hero>
          </Section>
          <Section>
            <Columns>
              <Columns.Column size="one-third">33.33% width of container</Columns.Column>
              <Columns.Column size="one-third">33.33% width of container</Columns.Column>
              <Columns.Column size="one-third">33.33% width of container</Columns.Column>
            </Columns>
          </Section>
        </Container>
      </div>
    </div>
  );
}

export default App;

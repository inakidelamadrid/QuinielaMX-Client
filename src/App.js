import React from 'react';
//import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { Container, Section, Hero, Heading } from 'react-bulma-components';
import Match from './components/Match';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      matches: [
      {
        local   : {name: 'America', id: 1},
        visitor : {name: 'Guadalajara', id: 2},
      },
      {
        local   : {name: 'Cruz Azul', id: 3},
        visitor : {name: 'Toluca', id: 4},
      },
      {
        local   : {name: 'Atlas', id: 5},
        visitor : {name: 'Queretaro', id: 6},
      }
      ]
    }
  }

  render(){
    const matchesComponents = this.state.matches.map((match, index) => {
      return (
        <Match key={`match#${index}`} data={match}></Match>
      )
    });
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
              {matchesComponents}
            </Section>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

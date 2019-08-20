import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { Container, Section, Hero, Heading } from 'react-bulma-components';
import Match from './components/Match';

class App extends React.Component {
  API_HOST = "http://localhost:5000/api";

  constructor(props){
    super(props);
    this.state = {
      matches: [],
      teams: []
    }
  }

  buildAndLoadMatches(teams, matches){
    let transformedMatches = matches.map( match => {
      let visitor = _.find( teams, team => team.id === match.visitor_team_id );
      let local = _.find( teams, team => team.id === match.local_team_id );
      return {
        local,
        visitor,
        id: match.id,
        result: match.result
      }
    });

    this.setState({
      matches: transformedMatches
    });
  }

  componentDidMount(){
    axios.get(`${this.API_HOST}/teams`)
    .then(res => {
      // get the teams
      const teams = res.data;
      // now get the matches raw data ( matchweek id is hardcoded )
      axios.get(`${this.API_HOST}/matchweeks/14/matches`)
      .then( res => {
        // we have access to the teams in this closure
        this.buildAndLoadMatches(teams, res.data);
      })
    });
  }

  setMatchResult(matchId, value){
    let match = _.find(this.state.matches, match => match.id === matchId)
  }

  render(){
    const matchesComponents = this.state.matches.map((match, index) => {
      return (
        <Match key={"match#" + index} data={match} setMatchResult={this.setMatchResult.bind(this)}></Match>
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

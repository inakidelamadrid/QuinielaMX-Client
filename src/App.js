import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { Container, Section, Hero, Heading } from 'react-bulma-components';
import Match from './components/Match';

class App extends React.Component {
  API_HOST = "http://localhost:5000/api";
  // this player id is coded but it can exist in a URL param
  PLAYER_ID = 1;
  // same for the week id
  MATCHWEEK_ID = 14;

  constructor(props){
    super(props);
    this.state = {
      matches: [],
      teams: []
    }
  }

  buildAndLoadMatches(teams, playerMatches){
    let transformedMatches = playerMatches.map( playerMatch => {
      const match = playerMatch.match;
      let visitor = _.find( teams, team => team.id === match.visitor_team_id );
      let local = _.find( teams, team => team.id === match.local_team_id );
      return {
        local,
        visitor,
        playerMatchId: playerMatch.id,
        result: playerMatch.bet_match_result
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
      axios.get(`${this.API_HOST}/players/${this.PLAYER_ID}/matchweeks/${this.MATCHWEEK_ID}/matches`)
      .then( res => {
        // we have access to the teams in this closure
        this.buildAndLoadMatches(teams, res.data);
      })
    });
  }

  setMatchResult(matchId, value){
    axios.patch(
      `${this.API_HOST}/players/${this.PLAYER_ID}/matchweeks/${this.MATCHWEEK_ID}/matches/${matchId}`,
      {result: value, using_new_cli: true}
    )
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

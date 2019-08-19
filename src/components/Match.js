import React from 'react';
import {Box, Button, Image, Columns} from 'react-bulma-components';
import './Match.scss';
import america from '../America.png'
import guadalajara from '../Guadalajara.png'


class Match extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      localTeam: {id: 1},
      visitorTeam: {id: 2}
    }
  }

  render(){
    return (
      <Columns>
        <Columns.Column className='Match-TeamSelection' size="one-third">
          <Box>
            <div className="Image-Box">
              <Image src={america} /> 
            </div>
          </Box>
        </Columns.Column>

        <Columns.Column className="Match-Tie" size="one-third">
          <Box>
            <Columns>
              <Columns.Column size="two-fifths">
              </Columns.Column>
              <Columns.Column size="one-fifth">
                <Button fullwidth={false} color='white'>Click me</Button>
              </Columns.Column>
              <Columns.Column size="two-fifths">
              </Columns.Column>
            </Columns>
          </Box>
        </Columns.Column>

        <Columns.Column className='Match-TeamSelection' size="one-third">
          <Box>
          <Columns>
            <Columns.Column size="fourt-fifths">
              </Columns.Column>
              <Columns.Column size="one-fifth">
                <div className="Image-Box">
                  <Image src={guadalajara} /> 
                </div>
              </Columns.Column>
            </Columns>
          </Box>
        </Columns.Column>
      </Columns>
    )
  }
}

export default Match;

import React from 'react';
import {Box, Button, Image, Columns} from 'react-bulma-components';
import fontawesome from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
            <Columns>
              <Columns.Column size="one-quarter">
                <div className="Image-Box">
                  <Image src={america} /> 
                </div>
              </Columns.Column>
              <Columns.Column style={{'textAlign': 'right'}}>
                <Button color='white'>
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                </Button>
              </Columns.Column>
            </Columns>
          </Box>
        </Columns.Column>

        <Columns.Column className="Match-Tie" size="one-third">
          <Box>
            <Columns>
              <Columns.Column size="two-fifths">
              </Columns.Column>
              <Columns.Column size="one-fifth">
                <Button fullwidth={false} color='white'>
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                </Button>
              </Columns.Column>
              <Columns.Column size="two-fifths">
              </Columns.Column>
            </Columns>
          </Box>
        </Columns.Column>

        <Columns.Column className='Match-TeamSelection' size="one-third">
          <Box>
            <Columns>
              <Columns.Column size="one-quarter">
                <Button fullwidth={false} color='white'>
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                </Button>
              </Columns.Column>
              <Columns.Column>
                <div className="Image-Box">
                  <Image src={guadalajara} style={{float: 'right'}}/> 
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

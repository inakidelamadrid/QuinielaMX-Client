import React from 'react';
import {Box, Button, Image, Columns} from 'react-bulma-components';
import fontawesome from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Match.scss';
import america from '../America.png'
import guadalajara from '../Guadalajara.png'




class Match extends React.Component{
  LOCAL   = 1;
  VISITOR = 2;
  TIE     = 3;

  constructor(props){
    super(props);
    this.state = {
      result: {
        local   : true,
        tie     : false,
        visitor : false
      }
    }
  }

  handleClick(result){
    console.log("Result: " + result);
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
                <Button color='white' onClick={ 
                  ()=> this.handleClick(this.LOCAL)
                }>
                  {this.state.result.local ? 
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                  : null}
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
                <Button fullwidth={false}
                        color='white'
                        onClick={()=> this.handleClick(this.TIE)}>
                  {this.state.result.tie ? 
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                  : null}
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
                <Button fullwidth={false} color='white'
                  onClick={()=> this.handleClick(this.VISITOR)}>
                  {this.state.result.visitor ? 
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                  : null}
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

import React from 'react';
import {Box, Button, Image, Columns} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './Match.scss';
import america from '../America.png'
import guadalajara from '../Guadalajara.png'




class Match extends React.Component{
  LOCAL   = 'L';
  VISITOR = 'V';
  TIE     = 'E';

  constructor(props){
    super(props);
    this.state = {
      result: this.LOCAL
    }
  }

  handleClick(value){
    this.setState({
      result: value
    });
  }

  render(){
    const local = this.props.data.local;
    const visitor = this.props.data.visitor;

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
              <Columns.Column className="Team-Name" size="one-quarter">
                <span>{local.name}</span>
              </Columns.Column>
              <Columns.Column style={{'textAlign': 'right'}}>
                <Button color='white' onClick={ 
                  ()=> this.handleClick(this.LOCAL)
                }>
                  {this.state.result === this.LOCAL ? 
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
                  {this.state.result === this.TIE ? 
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
                  {this.state.result === this.VISITOR ? 
                  <FontAwesomeIcon icon={faCheck} size="3x"/>
                  : null}
                </Button>
              </Columns.Column>
              <Columns.Column className="Team-Name" size="half" style={{"textAlign": "right"}}>
                <span>{visitor.name}</span>
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

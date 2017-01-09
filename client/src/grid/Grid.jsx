/**
* @desc Ce component permet d'intégrer facilement une grid avec un contenu modifiable
*/

import Card from '../card/Card.jsx';

class Grid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {names : ['aviron','badmington','basketball','bobsleigh','equitation','football','hockey','natation','petanque','ski','surf','tennis',]}
  }

  // Le HTML qui sera incorporé à chaque fois que <Grid /> est appelé
  render () {
    return (
      <div>
        <div className="divider"></div>
        <div className="row">
          {
            this.state.names.map((n)=> {
              return (
                <div className="col s12 m3 l3" key={n}>
                  <Card content={n} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

// Export section
export default Grid;

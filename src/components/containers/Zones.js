import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
  constructor() {
    super();
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list : []
    }

    this.submitZone = this.submitZone.bind(this);
    this.handleZone = this.handleZone.bind(this);
  }

  componentDidMount() {
    console.log('render did mount');
    superagent
    .get('api/zone')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {

      if (err) {
        return alert('error: ' + err)
      }

    let results = response.body.results;
      this.setState({
        list: results
      })
    })

  }

  submitZone(e) {
    e.preventDefault(e);
    console.log('body: ' + JSON.stringify(this.state.zone));
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.zone);

    this.setState({
      list: updatedList
    })
  }

  handleZone(e) {
    console.log(e.target.value);
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[e.target.id] = e.target.value;

    this.setState({
      zone: updatedZone
    })
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return <li key={i}><Zone zone={zone} /></li>
    })
    console.log('first render');

    return (
      <div>
        <ol>
          {listItems}
        </ol>
        <form>
            <input onChange={this.handleZone} id="name" className="form-control" type="text" name="username" placeholder="username"  />
            <input onChange={this.handleZone} id="zipCode" className="form-control" type="text" name="body" placeholder="comment"  />
            <button onClick={this.submitZone} className="btn btn-succes">post</button>
        </form>
      </div>
    )
  }
}

export default Zones;

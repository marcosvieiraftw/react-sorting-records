import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';
import _ from 'lodash';

/**
 * Main component that will manage the state of its children.
 *
 * @author [Marcos Vieira](https://github.com/marcosvieiraftw)
 */
class App extends Component {
  constructor () {
    super();
    this.state = {
      people: [
        {
            name: "Veronica Mize",
            dob: "11/29/2011"
        }, {
            name: "Cecilia Olsson",
            dob: "09/16/1992"
        }, {
            name: "Peter Parker",
            dob: "01/16/1992"
        }, {
            name: "Jimmy Shergil",
            dob: "12/12/2001"
        }, {
            name: "Alexander Alfred",
            dob: "02/09/1891"
        }, {
            name: "Janice Shroyer",
            dob: "12/01/1982"
        }, {
            name: "Ralph White",
            dob: "11/30/2011"
        }, {
            name: "Deborah T. Decker",
            dob: "10/31/1999"
        }
      ]
    }
  }

  componentDidMount() {
    this.nameOrderChangedHandler();
  }

  /**
  * Responsible for ordering the array ascending by name.
  */
  nameOrderChangedHandler = (sort) => {
    this.setState({
      people: _.orderBy(this.state.people, 'name', 'asc')
    });
  }

  /**
  * Responsible for ordering the array ascending by dob.
  */
  dateOrderChangedHandler = () => {
    this.setState({
      people: _.orderBy(this.state.people, (obj) => {
        return new Date(obj.dob);
      })
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter
          nameOrderChanged={ this.nameOrderChangedHandler }
          dateOrderChanged={ this.dateOrderChangedHandler }>
        </Filter>
        <RecordTable data={ this.state.people }></RecordTable>
      </div>
    );
  }
}

export default App;

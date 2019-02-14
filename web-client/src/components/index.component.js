import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './table.row';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
      this.baseURL='http://localhost:4200/';
    }
    
    componentDidMount(){
      console.log("did mount called");
      axios.get(this.baseURL+'business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Person</th>
                <th>Business</th>
                <th>GST Number</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
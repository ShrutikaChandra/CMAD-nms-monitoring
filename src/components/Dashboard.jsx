import React from "react";
import { PieChart, Legend } from 'react-easy-chart';
import { fetchCount } from '../rest/ajax.js';
import store from "../stores/store.js";
import '../Header.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.forceUpdate();
    });
    fetchCount();
    console.log('Dashboard constructor...', store.getState());
    const divStyle = {
      '.chart_lines': {
        strokeWidth: 0
      },
      '.chart_text': {
        fontFamily: 'serif',
        fontSize: '1.25em',
        fill: '#333'
      }
    };
  }

  render() {
    return (
      <div className="dashboard">
        <PieChart
          size={200}
          data={store.getState().count}
          labels={'value'}
          styles={this.divStyle}
        />
        <Legend data={store.getState().count} dataId={'key'} horizontal />
      </div>
    );
  }
}

export default Dashboard;




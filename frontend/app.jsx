import React from 'react';
import { fetchIndicators } from './api_util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicators: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    fetchIndicators().then(indicators => this.setState({ indicators: Object.values(indicators), isLoading: false }));
  }

  displayIndicators() {
    const { indicators } = this.state;
    const header = [
      ...new Set(indicators.map((indicator) => indicator.year)),
    ].sort();
    header.unshift("Indicator Code");
    header.unshift("Indicator Name");

    const sortedIndicators = indicators.sort((a, b) =>
      a.code > b.code ? 1 : -1
    );
    const rows = [];
    let row = new Array(header.length);
    const firstIndicator = sortedIndicators[0];
    row[0] = <td key={firstIndicator.name}>{firstIndicator.name}</td>;
    row[1] = <td key={firstIndicator.code}>{firstIndicator.code}</td>;
    row[header.indexOf(firstIndicator.year)] = <td key={firstIndicator.id}>{firstIndicator.value}</td>;

    for (let i = 1; i < sortedIndicators.length; i++) {
      const indicator = sortedIndicators[i];
      if (indicator.code != sortedIndicators[i - 1].code) {
        rows.push(<tr key={i}>{row}</tr>);
        row = new Array(header.length);
        row[0] = <td key={indicator.name}>{indicator.name}</td>;
        row[1] = <td key={indicator.code}>{indicator.code}</td>;
        row[header.indexOf(indicator.year)] = <td key={indicator.id}>{indicator.value}</td>;
      } else {
        row[header.indexOf(indicator.year)] = <td key={indicator.id}>{indicator.value}</td>;
      }
    }
    rows.unshift(header.map((columnHeader, i) => <th key={i}>{columnHeader}</th>));
    return (
      <table>
        {rows}
      </table>
    );
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>...Loading</p>
    } else {
      return this.displayIndicators();
    }
  }
}

export default App;
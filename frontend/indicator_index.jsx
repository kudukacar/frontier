import React from 'react';

class IndicatorIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicators: this.props.indicators,
    };
  }

  setHeader() {
    const { indicators } = this.state;
    const header = [
      ...new Set(indicators.map((indicator) => indicator.year)),
    ].sort();
    header.unshift("Indicator Code");
    header.unshift("Indicator Name");
    return header;
  }

  render() {
    const { indicators } = this.state;

    const header = this.setHeader();
    const headerIndex = {};
    header.forEach((cell, i) => (headerIndex[cell] = i));

    const rows = [];
    let row;

    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      if (i == 0 || indicator.code != indicators[i - 1].code) {
        if (i != 0) {
          rows.push(<tr key={i}>{row}</tr>);
        }
        row = header.map((value, i) => <td key={i}></td>);
        row[0] = (
          <th key={indicator.name} scope="row">
            {indicator.name}
          </th>
        );
        row[1] = <td key={indicator.code}>{indicator.code}</td>;
        row[headerIndex[indicator.year]] = (
          <td key={indicator.id + indicator.year}>{indicator.value}</td>
        );
      } else {
        row[headerIndex[indicator.year]] = (
          <td key={indicator.id + indicator.year}>{indicator.value}</td>
        );
        if (i == indicators.length - 1) {
          rows.push(<tr key={i}>{row}</tr>);
        }
      }
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            {header.map((columnHeader, i) => (
              <th scope="col" key={i}>
                {columnHeader}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default IndicatorIndex;
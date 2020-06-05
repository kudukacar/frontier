import React from 'react';
import { fetchIndicators } from './api_util';
import IndicatorIndex from './indicator_index';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     indicators: [],
     isLoading: true
   };
 }
 
 componentDidMount() {
   fetchIndicators().then((indicators) =>
     this.setState({
       indicators: Object.values(indicators).sort((a, b) => a.code > b.code ? 1 : -1),
       isLoading: false,
     })
   );
 }
 
 render() {
   const { isLoading, indicators } = this.state;
 
   if (isLoading) {
     return <div className="homepage">...Loading</div>;
   } else {
     return (
       <>
         <h2 className="dataheader">The World Bank - China Data</h2>
         <IndicatorIndex indicators={indicators}/>
       </>
     );
   }
 }
}


export default App;
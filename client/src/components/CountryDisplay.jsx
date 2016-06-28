var React = require('react');

var CountryDisplay = React.createClass({

  render: function() {
    // var borderFwiends = this.props.countryDetails.borders.map(function(borderCode){
    //   for(var country of neighbours){
    //     if(country.alpha3Code === borderCode){
    //       return <li key={country.alpha2Code}>{window.alert("Country: " + country.name + "\n" + "Population " + country.population)}{country.name}</li>
    //     }
    //   }
    // })

    return (
      <div>
      <h4>Country Name: {this.props.countryDetails.name}</h4>
      <h4> Country population: {this.props.countryDetails.population}</h4>
      <h4> Country Capital City: {this.props.countryDetails.capital}</h4>
      <h4> Country Native Spelling: {this.props.countryDetails.nativeName}</h4>
      </div>
      );
  }

});

module.exports = CountryDisplay;
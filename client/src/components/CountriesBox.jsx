var React = require('react');
var CountrySelector = require('./CountrySelector.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');
var BorderCountry = require('./BorderCountry.jsx');

var CountriesBox = React.createClass({

  getInitialState: function() {
    return {
      countries: [], displayCountry: null, 
      borders: []
    };
  },

  setDisplayCountry: function(country){
    this.setState({displayCountry: country})
    this.borderInfo()
  },

  componentDidMount: function(){
    console.log('CDM was called');
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState( {countries: data} )
    }.bind(this)
    request.send();
  },

  borderInfo: function(country){
   var info = this.state.displayCountry.borders;
   var borderInfo = info.map(function(code){
    return code
  })
   this.setState({borders: borderInfo})
 },


 render: function() {
  var displayElement = <h4>no country selected</h4>
  if(this.state.displayCountry){
    displayElement = <CountryDisplay countryDetails={this.state.displayCountry}/>
  }

  var displayBorders = <h4>no bordering countries</h4>
  if(this.state.borders){
    displayBorders = <BorderCountry borderInfo={this.state.borders}/>
  }

  return(
    <div>
    <h4> Countries Box </h4>
    <CountrySelector 
    countries={this.state.countries}
    onSelectCountry={this.setDisplayCountry}
    />
    {displayElement}
    {displayBorders}
    </div>
    )
}

});

module.exports = CountriesBox;
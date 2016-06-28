var React = require('react');

var BorderCountry = React.createClass({

  displayBorders: function(){
    for (country of this.props.borderInfo){
      return country
    }
  },

  render: function(){
    return (
      <div>
        {this.displayBorders}
      </div>
    );
  }.bind(this)

});

module.exports = BorderCountry;
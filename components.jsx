var React = require('react');


var Root = React.createClass({
  render: function() {
    return React.DOM.div(null, "Hello, world!");
  }
});

module.exports = {
  Root: Root
}

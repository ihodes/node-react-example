/** @jsx React.DOM */
try {
  // Hack Notice: proper solution would entail precompiling JS[X] files we want
  // to server on the client-side with browserify etc, and move them to a proper
  // /static/dist directory.
  React = require('react');
} catch (e) {}


var Root = React.createClass({
  render: function() {
    console.log('rendering...');
    return <div onClick={this.handleClick}>The time is <span>{this.props.date}</span></div>;
  },

  handleClick: () => {
    console.log('clicked!');
  }
});


try { // Same "Hack Notice" as above.
  module.exports = {
    Root: Root
  };
} catch (e) {}

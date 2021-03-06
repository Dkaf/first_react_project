// js/components/person-list.js
var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

var PersonList = React.createClass({
    render: function() {
        var people = [];
        for (var i=0; i<5; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
});

module.exports = PersonList;

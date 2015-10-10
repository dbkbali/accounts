var Record = React.createClass({
  propTypes: {
    date: React.PropTypes.node,
    title: React.PropTypes.string,
    amount: React.PropTypes.node
  },

  render: function() {
    return (
      <tr>
        <td>Date: {this.props.date}</td>
        <td>Title: {this.props.title}</td>
        <td>Amount: {amountFormat(this.props.amount)}</td>
      </tr>
    );
  }
});

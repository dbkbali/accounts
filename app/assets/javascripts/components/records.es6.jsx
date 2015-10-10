class Records extends React.Component {
  getInitialState() {
    records: {this.props.data}
  }

  getDefaultProps() {
      records: []
  }

  render () {
    var recordNodes = this.props.data.map((record) => {
          return (<Record record={record}/>)
        });

    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <table className='table table-bordered'>
          <thead></thead>
          <tr></tr>
          <th>Date</th>
          <th>Title</th>
          <th>Amount</th>
          <tbody>
            {recordNodes}
          </tbody>
        </table>
      </div>
    );
  }
}

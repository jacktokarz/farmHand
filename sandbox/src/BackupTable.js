import React from 'react';
import ReactDOM from 'react-dom'
import jQuery from "jquery"


//const state = { playerList: ['Nobody'], action: 'None' }
class NewTable extends React.Component {

  state = {
    items: [
      { playerList: ['a', 'b'], action: 'apple' },
      { playerList: ['joe'], action: 'orange' },
      { playerList: ['stephen', 'joe'], action: 'grape' },
      { playerList: ['nam', 'joe', 'stephen'], action: 'pear' },
    ]
  }

  collectData = () => {
    const data = [{ playerList: ['a', 'b'], action: 'apple' }, { playerList: ['a', 'b'], action: 'apple' }]
    if (data !== '') {
      for (var i = 0; i < data.length; i++) {
        this.setState(({ items }) => ({
          items: [
            ...items,
            { playerList: ['e'], action: 'thing' }
          ],
        }))
      }
    }
  }

  render() {
    const { items } = this.state
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Players</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, index) => (
            <tr key={i.id}>
              <td>
                {i.playerList.join(', ')}
              </td>
              <td>
                {i.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  componentDidMount() {
    //setInterval(this.collectData, 1000)
  }
}

export default NewTable;
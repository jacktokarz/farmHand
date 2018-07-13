import React from 'react'
import jQuery from "jquery"
import {getCookie} from "./globalFn"


const username= getCookie("username")
console.log("username: "+username)
class NewTable extends React.Component {

  state = {items: [] }

  collectData = () => {
    jQuery.ajax({
      type: 'POST',
      url: 'readGeneric.php',
      data: {
        query: "SELECT * FROM `matches` WHERE status != 'ENDED'"
      },
      datatype: 'text',
      success: function (matchesData) {
        var data = JSON.parse(matchesData);
        if (data !== '') {
          var list= []
          for (var i = 0; i < data.length; i++) {
            var actionLbl=''
            var inMatch= (data[i].playerThree===username || data[i].playerTwo===username || data[i].playerOne===username)
            var matchFull= (data[i].playerThree!=null)
            if( !inMatch && (data[i].status === "STARTED" || (matchFull && data[i].status === "CREATED"))) {
              actionLbl='hidden'
            }
            else {
              if(data[i].status === "STARTED") { /* if "STARTED", inMatch is implied from previous check */
                actionLbl= "Play Match";
              }
              else {
                if(inMatch) {
                  actionLbl = "Start Match";
                }
                else {
                  actionLbl= "Join Match";
                }
              }
            }

            const newItem = {
              playerList: [data[i].playerOne, data[i].playerTwo, data[i].playerThree].filter(function(n){ return n != undefined }),
              actionLabel: actionLbl,
              id: data[i].id
            }
            list.push(newItem)
          }
          this.setState(({ items }) => ({
            items: [
              ...list
            ],
          }))
        }
      }.bind(this)
    })
  };
  
  render() {
    console.log("refreshing")
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
                <button 
                  className={i.actionLabel=="hidden" ? "hidden": "tableAction"} 
                  onClick={(e) => this.actionFunction(i, e)}
                >
                  {i.actionLabel}
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
    )
  }

  actionFunction(item, e) {
    if(item.actionLabel === "Play Match") {
      playMatch(item.id) 
    }
    else if(item.actionLabel === "Start Match") {
      startMatch(item.id)
    }
    else if(item.actionLabel === "Join Match") {
      joinMatch(item.id, item.playerList)
    }
  }

  componentDidMount() {
    setInterval(this.collectData, 1000)
  }
}


function joinMatch(id, playerList) {
  var updateQuery= "UPDATE `matches` SET ";
  if(playerList.length == 1) {
    updateQuery= updateQuery+"playerTwo= '"+username+"'";
  }
  else if(playerList.length == 2){
    updateQuery= updateQuery+"playerThree= '"+username+"'";
  }
  updateQuery= updateQuery+ "WHERE id=" + id;
  console.log("Joining match with id: "+id+'\n'+"update query: "+updateQuery);
  jQuery.ajax({
    type: 'POST',
    url: 'insertGeneric.php',
    data: {
      query: updateQuery
    },
    datatype: 'text',
    success: function (reply) {

    }
  });
}

function playMatch(id) {
  console.log("playing "+id)
}

function startMatch(id) {
  console.log("starting "+id)
}


export default NewTable;
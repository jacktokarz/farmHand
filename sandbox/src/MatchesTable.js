import React from 'react';
import ReactTable from 'react-table'
import jQuery from "jquery"


class MatchesTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: this.collectData
    };
  }
  collectData = () => {
    jQuery.ajax({
      type: 'POST',
      url: 'readGeneric.php',
      data: {
        query: "SELECT * FROM `matches` WHERE status != 'ENDED'"
      },
      datatype: 'text',
      success: function (reply) {
        var data = JSON.parse(reply);
        console.log("Match data length: " + data.length);
        var matchInfo = [];
        if (data !== '') {
          for (var i = 0; i < data.length; i++) {
            var tempMatch= match(data[i].id, data[i].playerOne, data[i].playerTwo, data[i].playerThree, data[i].status);
            matchInfo.push(tempMatch);
          }
        }
        return range(data.length).map(d => {
          return {
            ...match(),
            children: range(10).map(match)
          };
        });
      }
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Players",
                  accessor: "players"
                },
                {
                  Header: "Action",
                  id: "action",
                  accessor: "action"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const match = (id, playerOne, playerTwo, playerThree, status) => {
  return {
    id: id,
    playerOne: playerOne,
    playerTwo: playerTwo,
    playerThree: playerThree,
    status: status
  };
};
const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};


function recreateMatchesTableBody(matchInfo) {
  
}



export default MatchesTable;
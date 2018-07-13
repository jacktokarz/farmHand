import React from "react";
import ReactDOM from "react-dom";
import jQuery from "jquery";

import Header from "./Header";
import NewTable from "./NewTable";
import "./styles.css";

import "react-table/react-table.css";

const rootElement = document.getElementById("root")


function App() {
  return (
    <div>
      <Header title="Farm Hand Lobby"/>
      <div className="container spaceAbove">
        <NewTable />
        <button onClick={createMatch}>Create Match</button>
      </div>
    </div>
  )
}


const username="testName"

function createMatch() {
  alert("Match is being created!")
  jQuery.ajax({
    type: 'POST',
    url: 'readGeneric.php',
    data: {
      query: "INSERT INTO `matches` SET playerOne = '" + username + "'"
    },
    datatype: 'text',
    success: function (reply) {
      console.log("success creating match!")
    }
  })
}

ReactDOM.render(<App />, rootElement);

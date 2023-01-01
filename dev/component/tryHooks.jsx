const React = require("react");

function Try (props) {
    return (
      <>
        <li>
          <div>{props.tryInfo.try}</div>
          <div>{props.tryInfo.result}</div>
        </li>
      </>
    );
}

module.exports = Try;

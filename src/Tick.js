import React from 'react'

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>it is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
}
setInterval(tick, 1000);

export default Tick
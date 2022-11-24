import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.Decide = class extends React.Component {
  render() {
    const {parent, playable, dec} = this.props;
    return (
      <div>
        {dec ? 'Decide about Bobs fortune' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.decide(true)}
        >YES</button>
        <button
          disabled={!playable}
          onClick={() => parent.decide(false)}
        >NO</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
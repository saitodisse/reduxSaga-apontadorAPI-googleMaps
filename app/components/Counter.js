import React, { PropTypes } from 'react';
import styles from './styles';

const renderWait = (displayLoading) => {
  if (displayLoading) {
    return <span>(loading...)</span>;
  }
  return null;
};

const Counter = ({
  state,
  onReset,
  onIncrement,
  onDecrement,
  onIncrementIfOdd,
  onIncrementAsync,
  onFetchTokenAsync,
}) => {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.sectionTitle}>
          Counter Example
        </h1>
      </div>
      <div style={styles.container}>
        <button style={styles.buttonStyle} onClick={onReset}>
          RESET
        </button>
        <button style={styles.buttonStyle} onClick={onDecrement}>
          -
        </button>
        <button style={styles.buttonStyle} onClick={onIncrement}>
          +
        </button>
        <button style={styles.buttonStyle} onClick={onIncrementIfOdd}>
          + (if odd)
        </button>
        <button style={styles.buttonStyle} onClick={onIncrementAsync}>
          + (async)
        </button>
      </div>
      <div style={styles.container}>
        <div style={styles.containerResults}>
          {state.get('showLoading').get('displayLoading') && 'Loading'}
          <h1 style={styles.resultTitle}>
            Counter : {state.get('counter').get('count')}
          </h1>
          {state.get('showLoading').get('displayLoading') && 'Loading'}
        </div>
      </div>

      <hr />

      <div style={styles.container}>
        <h1 style={styles.sectionTitle}>
          MapLink API
        </h1>
      </div>
      <div style={styles.container}>
        <button style={styles.buttonBigStyle} onClick={onFetchTokenAsync}>
          fetch token
        </button>
      </div>

      <hr />

      <div style={styles.container}>
        <h1 style={styles.sectionTitle}>
          State:
        </h1>
      </div>
      <div style={styles.container}>
        <div style={styles.containerPre}>
          <pre>
            {JSON.stringify(state.toJS(), null, 2)}
          </pre>
        </div>
      </div>

    </div>
  );
};

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onFetchTokenAsync: PropTypes.func.isRequired,
};

export default Counter;

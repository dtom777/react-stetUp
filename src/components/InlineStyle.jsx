import React from 'react';

const InlineStyle = () => {
  const title = {
    border: 'solid 2px #392ff',
    borderRadius: '20px',
    padding: '8px',
    margin: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  return (
    <div style={title}>
      <p>- InlineStyle -</p>
      <button>Fight</button>
    </div>
  );
};

export default InlineStyle;

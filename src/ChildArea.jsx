import React, { memo } from 'react';

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('ChileAreaがレンダリングされた');

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log('...');
  });
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
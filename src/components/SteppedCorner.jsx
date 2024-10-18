import React from 'react';

const SteppedCorner = () => {
  const cellStyle = {
    width: '24px',
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: 'white'
  };

  const h16 = {
    height: '16px'
  };

  const h24 = {
    height: '24px'
  };

  const borderTl = {
    borderTop: '1px solid black',
    borderLeft: '1px solid black'
  };

  const borderR = {
    borderRight: '1px solid black'
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: 'none'
  };

  const tableStyle = {
    display: 'flex',
    position: 'absolute',
    right: 0,
    top: '248px'
  };

  return (
    <div style={tableStyle} className="border-grid">
      {/* 첫 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTl }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTl }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
      </div>
      {/* 두 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTl }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTl }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
        <div style={{ ...cellStyle, ...h24 }} className="cell"></div>
      </div>
      {/* 세 번째 열 */}
      <div style={colStyle} className="border-col">
        <div style={{ ...cellStyle, ...h24, ...borderTl }} className="cell border-tl"></div>
        <div style={{ ...cellStyle, ...h16 }} className="cell h16"></div>
        <div style={{ ...cellStyle, ...h24, ...borderTl, ...borderR }} className="cell border-tl border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell border-r"></div>
        <div style={{ ...cellStyle, ...h24, ...borderR }} className="cell"></div>
      </div>
    </div>
  );
};

export default SteppedCorner;
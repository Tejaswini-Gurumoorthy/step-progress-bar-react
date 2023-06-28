import React from 'react';

function ProgressBar3() {
  const activeli2 = () => {
    console.log(2);
  };

  const activeli3 = () => {
    console.log(3);
  };

  const activeli4 = () => {
    console.log(4);
  };

  const activeli5 = () => {
    console.log(5);
  };

  const activeli6 = () => {
    console.log(6);
  };

  const activeli7 = () => {
    console.log(7);
  };

  return (
    <div>
      <div className="stepprogresscontainer" id="stepprogressbar">
        <div className="frontdiv" style={{ display: 'block', zIndex: 5, position: 'relative' }}>
          <ul className="stepprogressbar">
            <li id="li-s-1" className="activeli">Schaden angelegt</li>
            <li id="li-s-2" onClick={activeli2}>xxxx1</li>
            <li id="li-s-3" onClick={activeli3}>xxxx1</li>
            <li id="li-s-4" onClick={activeli4}>xxxx1</li>
            <li id="li-s-5" onClick={activeli5}>xxxx1</li>
            <li id="li-s-6" onClick={activeli6}>xxxx1</li>
            <li id="li-s-7" onClick={activeli7}>xxxx1</li>
          </ul>
        </div>
        <div style={{ position: 'relative', top: '20px' }} className="behinddiv">
          <div style={{ backgroundColor: 'rgb(36, 36, 36)', height: '3px', display: 'block', marginLeft: '8%', marginRight: '8%' }}></div>
          <div id="coverline" style={{ transition: 'width 1s ease', backgroundColor: '#2ac570', height: '3px', display: 'block', marginLeft: '8%', marginRight: '8%', marginTop: '-3px', width: '0%' }}></div>
          <div id="progressline" style={{ backgroundColor: '#2ac570', height: '3px', display: 'block', marginLeft: '8%', marginRight: '8%', marginTop: '-3px', width: '0%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar3;

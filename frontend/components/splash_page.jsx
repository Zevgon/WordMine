import React from 'react';
import { hashHistory } from 'react-router';

const getStarted = () => (
  <div className="get-started-div">
    <div className='except-flags'>
      <div className='splash-titles'>
        <div className='title'>
          WordMine
        </div>
        <i className='sub-title'>Learn the most common words in the language of your choice</i>
      </div>
      <button onClick={() => hashHistory.push('/auth')} className="get-started">Start Learning</button>
      <div className="world-map" />
    </div>
    <ul className='flags'>
      <li className='french' />
      <li className='spanish' />
      <li className='german' />
      <li className='italian' />
    </ul>
  </div>
);

export default getStarted;

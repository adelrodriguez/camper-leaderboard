import React from 'react';

const TableHead = ({ onCampersSort }) => {
  return (
    <tr>
      <th scope="col" className="h3">#</th>
      <th scope="col" className="h3">Camper</th>
      <th scope="col" className="h3 score-cell" onClick={ () => onCampersSort('RECENT') }>
        <span>Recent Points </span>
        <i className="fa fa-caret-down" id="recent-icon" aria-hidden="true"></i>
      </th>
      <th scope="col" className="h3 score-cell" onClick={ () => onCampersSort('TOP') }>
        <span>All Time Points </span>
        <i className="fa fa-caret-down hidden" id="all-time-icon" aria-hidden="true"></i>
      </th>
    </tr>
  );
};

export default TableHead;
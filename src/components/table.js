import React from 'react';

// Components
import TableHead from './table-head';
import TableItem from './table-item';

const Table = (props) => {
  const tableItems = props.campers.map((camper, index) => {
    return (
      <TableItem 
        key={ index }
        index={ index }
        camper={ camper }
      />
    );
  });

  return (
    <table className="table table-bordered table-dark">
      <thead className="thead-dark">
        <TableHead
          onCampersSort={ props.onCampersSort }
        />
      </thead>
      <tbody>
        { tableItems }
      </tbody>
    </table>
  );
};

export default Table;
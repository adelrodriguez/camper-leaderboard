import React from 'react';

const TableItem = ({ index, camper }) => {
  const userURL = `https://www.freecodecamp.org/${camper.username}`;

  return(
    <tr>
      <th scope="row">{ index + 1 }</th>
      <td>
        <img className="img-fluid rounded" src={camper.img} alt={camper.username} />
        <a href={userURL} target="_blank" rel="noopener" className="username">{camper.username}</a>
      </td>
      <td>{ camper.recent }</td> 
      <td>{ camper.alltime }</td>
    </tr>
  );
};

export default TableItem;
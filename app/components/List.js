import React from 'react';

function List(props) {
  return (<ul className='list'>
    {
      props.items.map(
        ({kind, data}) => {
        return (<li key={data.id}>
          {props.children(data)}
        </li>)
      })
    }
  </ul>)
}

export default List;

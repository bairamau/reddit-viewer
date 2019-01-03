import React from 'react';

function List(props) {
  return (<ul className='list'>
    {
      props.items.map(
        ({kind, data}) => {
        return (<li key={data.id}>
          <ListItem kind={kind} data={data}/>
        </li>)
      })
    }
  </ul>)
}

export default List;

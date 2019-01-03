import React from 'react';

function List(props) {
  return props.items.length === 0
  ? <p className='not-found'>No matches :C</p>
  :( 
    <ul className='list'>
      {
        props.items.map(
          ({ kind, data }) => {
            return (
              <li key={data.id}>
                {props.children(data)}
              </li>
            )
          })
      }
    </ul>
  )
}

export default List;

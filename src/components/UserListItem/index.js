import React from 'react';

const UserListItem = props => (
  <div className="list-item">
    {props.user.username} - {props.user.email}
  </div>
);

export default UserListItem;

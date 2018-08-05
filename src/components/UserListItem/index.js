import React from 'react';

const UserListItem = ({user}) => (
  <div className="list-item">
    {user.username} - {user.email}
  </div>
);

export default UserListItem;

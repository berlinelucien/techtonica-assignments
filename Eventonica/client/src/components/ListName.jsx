import React from 'react'

const ListName = ({listUser}) => {
  return (
    <div className="userList">{listUser.text}</div>
  )
}

export default ListName
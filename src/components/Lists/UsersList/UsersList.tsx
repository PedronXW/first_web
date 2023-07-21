import { useContext, useEffect } from 'react'
import { UsersContext } from '../../../contexts/UsersContext'
import UserCell from './UserCell'

const UsersList = () => {
  const { fetchUsers, users } = useContext(UsersContext)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="grid grid-cols-auto w-full gap-4 md:px-12 pl-7 pr-6 ">
      {users.map((user, key) => (
        <UserCell key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UsersList

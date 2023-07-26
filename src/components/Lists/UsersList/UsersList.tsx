import { useContext, useEffect } from 'react'
import { UsersContext } from '../../../contexts/UsersContext'
import UserCell from './UserCell'

const UsersList = () => {
  const { fetchUsers, users } = useContext(UsersContext)

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div
      className={`grid ${
        users.length < 3 ? 'lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-auto'
      } w-full gap-4 md:px-12 pl-7 pr-6`}
    >
      {users.length > 0 ? (
        users.map((user, key) => <UserCell key={user.id} user={user} />)
      ) : (
        <div className="h-full w-full flex justify-center items-center text-primary_color font-medium">
          Nenhuma usuário cadastrado
        </div>
      )}
    </div>
  )
}

export default UsersList

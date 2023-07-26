import UserCallCell from './UserCallCell'

interface UserCallListInterface {
  user: string
}

const UserCallList = ({ user }: UserCallListInterface) => {
  const calls: any = [1]

  return (
    <div className="grid grid-cols-1 h-full w-full">
      {calls.length > 0 ? (
        calls.map((call: any, key: number) => (
          <UserCallCell call={call} key={key} />
        ))
      ) : (
        <div className="h-full w-full flex justify-center items-center text-primary_color font-medium">
          Nenhuma chamada
        </div>
      )}
    </div>
  )
}

export default UserCallList

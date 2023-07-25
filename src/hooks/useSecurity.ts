// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { usePersistanceStore } from './usePersistanceStore'

const useSecurity = () => {
  const tokenJwt = usePersistanceStore().value.token

  if (!tokenJwt) return false

  const { isAdmin } = jwt_decode(tokenJwt) as any

  return !!isAdmin
}

export default useSecurity

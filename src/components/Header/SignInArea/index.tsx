import React, { useContext } from 'react'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'
import { UserContext } from '../../../contexts/UserContext'

import { User } from './styles'

type UserTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn(): boolean;
}

const SignInArea = (): JSX.Element => {
  const { isLoggedIn } = useContext(UserContext) as UserTypes
  
  return isLoggedIn ? (
    <User>
      <LoggedIn />
    </User>
  ) : (
    <User>
      <NotLoggedIn />
    </User>
  )
};

export default SignInArea
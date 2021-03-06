import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

import Notifications from './Notifications'
import Favorites from './Favorites'
import Cart from './Cart'

import { Div } from './styles'

type CartTypes = {
  isLoggedIn: boolean;
}

const Links = (): JSX.Element => {
  const { isLoggedIn } = useContext(UserContext) as CartTypes
  return (
    <Div>
      {isLoggedIn && <Notifications />}
      <Favorites />
      <Cart />
    </Div>
  )
};

export default Links
import { SVGProps } from 'react'

import Count from './Count'

import { CartWrapper } from './styles'

function Cart(props: SVGProps<SVGSVGElement>) {
  return (
    <CartWrapper>
        <a href="#">
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M11.647 25.894a2.546 2.546 0 00-2.536 2.55 2.546 2.546 0 002.536 2.549 2.557 2.557 0 002.55-2.55 2.557 2.557 0 00-2.55-2.549zM4 5.5v2.55h2.55l4.588 9.675-1.72 3.122a2.465 2.465 0 00-.32 1.224 2.557 2.557 0 002.55 2.55h15.296v-2.55h-14.76a.316.316 0 01-.32-.319l.04-.152 1.146-2.078h9.496c.956 0 1.798-.523 2.231-1.313l4.563-8.273a1.278 1.278 0 00-1.121-1.886H9.366l-1.199-2.55H4zm20.395 20.395a2.546 2.546 0 00-2.537 2.55 2.546 2.546 0 002.537 2.549 2.557 2.557 0 002.549-2.55 2.557 2.557 0 00-2.55-2.549z"
            fill="#fff"
            fillOpacity={0.8}
          />
        </svg>
        <Count>0</Count>
      </a>
    </CartWrapper>
  )
}

export default Cart
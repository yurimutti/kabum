import { SVGProps } from 'react'

function BoxSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.028 6a.854.854 0 01-.73-.417L6.161 3.679 5.03 5.583a.856.856 0 01-.967.385l-2.418-.7v3.179c0 .262.176.491.427.553l3.816.967c.18.044.369.044.547 0L10.254 9a.571.571 0 00.427-.553V5.268l-2.418.699A.803.803 0 018.028 6zm3.753-2.003l-.91-1.836a.287.287 0 00-.294-.159l-4.415.57 1.62 2.716a.289.289 0 00.326.13L11.6 4.41a.295.295 0 00.18-.413zM1.453 2.161L.544 3.997a.292.292 0 00.178.41l3.494 1.01a.289.289 0 00.326-.13l1.62-2.715-4.416-.57a.288.288 0 00-.293.16z"
        fill="#0060B1"
      />
    </svg>
  )
}

export default BoxSvg
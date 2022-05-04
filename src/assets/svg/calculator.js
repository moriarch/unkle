import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalculatorIco = (props) => (
  <Svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeWidth={2}
      d="M1 1h34.667v34.667H1zM1 44.334h34.667v34.667H1zM44.333 1H79v34.667H44.333zM44.333 44.334H79v34.667H44.333z"
    />
    <Path
      fill="#fff"
      d="M16.667 10H20v16.667h-3.333zM16.667 53.334H20v3.333h-3.333zM16.667 66.666H20v3.333h-3.333zM70 55v3.333H53.333V55zM70 65v3.333H53.333V65z"
    />
    <Path
      fill="#fff"
      d="M10 20v-3.333h16.667V20zM10 63.333V60h16.668v3.333zM53.333 20v-3.333H70V20z"
    />
  </Svg>
)

export default CalculatorIco

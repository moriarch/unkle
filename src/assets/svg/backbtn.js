import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackBtn = (props) => (
  <Svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.773 17.436 15.207 23l5.565 5.564M30.792 23H15.364"
      stroke="#0083FF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BackBtn

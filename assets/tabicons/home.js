import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Home = ({color}) => (
  <Svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M18.54 4.82 12.78.79C11.21-.31 8.8-.25 7.29.92L2.28 4.83C1.28 5.61.49 7.21.49 8.47v6.9C.49 17.92 2.56 20 5.11 20h10.78c2.55 0 4.62-2.07 4.62-4.62V8.6c0-1.35-.87-3.01-1.97-3.78ZM11.25 16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
      fill={color}
    />
  </Svg>
)

export default Home

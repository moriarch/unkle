import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalculateIcon = ({color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={2}
    
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"
    />
  </Svg>
)

export default CalculateIcon

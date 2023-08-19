import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M7.833 7.833v-7h2.334v7h7v2.333h-7v7H7.833v-7h-7V7.833h7Z"
    />
  </Svg>
)
export default SvgComponent

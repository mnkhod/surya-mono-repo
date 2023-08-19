import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={18}
    height={4}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M.833.833h16.334v2.333H.833V.833Z" />
  </Svg>
)
export default SvgComponent

import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#042539"
      fillOpacity={0.64}
      d="m3.86 12.883-3.527.784.784-3.528a6.667 6.667 0 1 1 2.743 2.743Zm.194-1.41.435.234A5.333 5.333 0 1 0 2.293 9.51l.233.436-.437 1.965 1.965-.437Z"
    />
  </Svg>
)
export default SvgComponent


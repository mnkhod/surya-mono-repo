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
      fill="#fff"
      d="M6.75 13.667a6.667 6.667 0 1 1 0-13.334 6.667 6.667 0 0 1 0 13.334Zm0-1.334a5.334 5.334 0 1 0 0-10.668 5.334 5.334 0 0 0 0 10.668Zm-.665-2.666-2.828-2.83.942-.942 1.886 1.886 3.77-3.771.944.943-4.714 4.714Z"
    />
  </Svg>
)
export default SvgComponent

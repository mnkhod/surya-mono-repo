import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronLeftIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#262626"
      d="m3.633 8 5.775 5.776-1.65 1.65L.333 8 7.758.576l1.65 1.65L3.633 8Z"
    />
  </Svg>
)
export default ChevronLeftIcon

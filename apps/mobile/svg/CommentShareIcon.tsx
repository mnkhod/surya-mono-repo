import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={13}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#042539"
      fillOpacity={0.64}
      d="m7.747 10.349-2.8-1.527a2.667 2.667 0 1 1 0-3.643l2.8-1.527a2.667 2.667 0 1 1 .64 1.17l-2.8 1.527c.107.427.107.875 0 1.302l2.8 1.527a2.667 2.667 0 1 1-.64 1.17ZM3 8.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm7.333-4a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm0 8a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Z"
    />
  </Svg>
)
export default SvgComponent

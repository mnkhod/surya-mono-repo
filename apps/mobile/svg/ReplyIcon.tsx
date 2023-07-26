import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#042539"
      fillOpacity={0.64}
      d="M5.667 0h2.666a5.333 5.333 0 0 1 0 10.667V13c-3.333-1.333-8-3.333-8-7.667A5.333 5.333 0 0 1 5.667 0ZM7 9.333h1.333a4 4 0 1 0 0-8H5.667a4 4 0 0 0-4 4c0 2.407 1.64 3.978 5.333 5.654V9.333Z"
    />
  </Svg>
)
export default SvgComponent


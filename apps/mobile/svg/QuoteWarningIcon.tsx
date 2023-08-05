import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillOpacity={0.6}
      d="M7.5 13.333A6.666 6.666 0 1 1 7.5 0a6.666 6.666 0 0 1 0 13.333ZM7.5 12a5.333 5.333 0 1 0 0-10.667A5.333 5.333 0 0 0 7.5 12Zm-.667-3.333h1.334V10H6.833V8.667Zm0-5.334h1.334v4H6.833v-4Z"
    />
  </Svg>
)
export default SvgComponent


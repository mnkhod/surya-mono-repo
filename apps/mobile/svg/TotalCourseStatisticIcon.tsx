import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#3D38BC"
      d="M18.005 0C19.107 0 20 .898 20 1.99v16.02c0 1.099-.893 1.99-1.995 1.99H2v-4H0v-2h2v-3H0V9h2V6H0V4h2V0h16.005ZM6 2H4v16h2V2Zm12 0H8v16h10V2Z"
    />
  </Svg>
)
export default SvgComponent

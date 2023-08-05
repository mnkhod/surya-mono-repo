import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={171}
    height={52}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF8333"
      d="M.784 36.028 8.774 9.35A12 12 0 0 1 21.301.84l137.615 11.867a12 12 0 0 1 10.915 10.82l.96 10.103c.655 6.892-4.641 12.907-11.561 13.129L12.665 51.465C4.47 51.728-1.568 43.88.784 36.028Z"
    />
  </Svg>
)
export default SvgComponent


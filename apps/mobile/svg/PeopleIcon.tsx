import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF8333"
      d="M12 10a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm6 5v5h-2v-5c0-4.451 2.644-8.285 6.447-10.016l.828 1.82A9.002 9.002 0 0 0 18 15ZM8 15v5H6v-5A9.002 9.002 0 0 0 .725 6.805l.828-1.821A11.002 11.002 0 0 1 8 15Z"
    />
  </Svg>
)
export default SvgComponent

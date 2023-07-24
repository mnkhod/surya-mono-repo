import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ChevronDownIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={6}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillOpacity={0.6}
      d="m5 3.781 3.3-3.3.943.943L5 5.667.757 1.424 1.7.481l3.3 3.3Z"
    />
  </Svg>
)
export default ChevronDownIcon


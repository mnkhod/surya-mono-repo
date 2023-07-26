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
      d="M10 0c2.025 0 3.667 1.667 3.667 4 0 4.667-5 7.333-6.667 8.333C5.333 11.333.333 8.667.333 4 .333 1.667 2 0 4 0c1.24 0 2.333.667 3 1.333C7.667.667 8.76 0 10 0ZM7.623 10.403c.587-.371 1.117-.74 1.613-1.134 1.987-1.58 3.097-3.307 3.097-5.269 0-1.573-1.024-2.667-2.333-2.667-.717 0-1.493.38-2.057.943L7 3.219l-.943-.943c-.564-.563-1.34-.943-2.057-.943-1.293 0-2.333 1.104-2.333 2.667 0 1.963 1.11 3.689 3.096 5.269.497.394 1.027.763 1.614 1.133.2.126.397.247.623.381.226-.134.423-.255.623-.38Z"
    />
  </Svg>
)
export default SvgComponent


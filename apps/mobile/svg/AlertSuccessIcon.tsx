import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#00BF70"
      d="M10.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10.5 18Zm-.997-4L5.26 9.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L9.503 14Z"
    />
  </Svg>
)
export default SvgComponent

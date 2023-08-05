import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={22}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#00BF70"
      d="m10.602 8.76 1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88L5.65 6.636l1.414-1.414 2.125 2.125 1.413 1.412v.001Zm.002-2.828L15.556.979l1.41 1.41-4.952 4.953-1.41-1.41Zm-2.827 5.655L6.364 13 0 6.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951Z"
    />
  </Svg>
)
export default SvgComponent

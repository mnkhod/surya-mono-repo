import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={137}
    height={51}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF8333"
      d="M.672 35.59 6.938 9.289A12 12 0 0 1 19.904.139l104.698 11.35a12 12 0 0 1 10.672 11.026l.789 10.44c.512 6.773-4.695 12.62-11.482 12.894L12.829 50.361c-7.946.32-14-7.036-12.157-14.771Z"
    />
  </Svg>
)
export default SvgComponent


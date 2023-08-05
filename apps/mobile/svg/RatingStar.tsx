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
      fill="#F2CA00"
      d="M9.077 1.22c.341-.821 1.505-.821 1.846 0l2.017 4.847a1 1 0 0 0 .843.613l5.233.42c.887.07 1.246 1.177.57 1.756L15.6 12.27a1 1 0 0 0-.323.992l1.219 5.106c.206.866-.735 1.55-1.494 1.086l-4.48-2.737a1 1 0 0 0-1.043 0l-4.48 2.737c-.76.464-1.7-.22-1.495-1.085l1.219-5.107a1 1 0 0 0-.323-.992L.413 8.856C-.262 8.277.097 7.17.983 7.1l5.234-.42a1 1 0 0 0 .844-.613L9.077 1.22Z"
    />
  </Svg>
)
export default SvgComponent


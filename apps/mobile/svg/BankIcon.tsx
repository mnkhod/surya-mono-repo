import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#051C2C"
      d="M0 18.5h20v2H0v-2Zm2-8h2v7H2v-7Zm5 0h2v7H7v-7Zm4 0h2v7h-2v-7Zm5 0h2v7h-2v-7Zm-16-5 10-5 10 5v4H0v-4Zm2 1.236V7.5h16v-.764l-8-4-8 4Zm8-.236a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </Svg>
)
export default SvgComponent

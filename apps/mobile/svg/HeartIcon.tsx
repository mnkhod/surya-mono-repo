import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HeartIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#051C2C"
      d="M14.5 0C17.538 0 20 2.5 20 6c0 7-7.5 11-10 12.5C7.5 17 0 13 0 6c0-3.5 2.5-6 5.5-6C7.36 0 9 1 10 2c1-1 2.64-2 4.5-2Zm-3.566 15.604a26.953 26.953 0 0 0 2.42-1.701C16.335 11.533 18 8.943 18 6c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L10 4.828 8.586 3.414C7.74 2.57 6.576 2 5.5 2 3.56 2 2 3.656 2 6c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571Z"
    />
  </Svg>
)
export default HeartIcon
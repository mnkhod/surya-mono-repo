import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SearchIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#262626"
      d="M9 0c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"
    />
  </Svg>
)
export default SearchIcon

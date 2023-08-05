import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LanguageIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#051C2C"
      d="M3 13v2a2 2 0 0 0 1.85 1.995L5 17h3v2H5a4 4 0 0 1-4-4v-2h2Zm13-5 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H9.601L14 8h2Zm-1 2.885L13.753 14h2.492L15 10.885ZM6 0v2h4v7H6v3H4V9H0V2h4V0h2Zm9 1a4 4 0 0 1 4 4v2h-2V5a2 2 0 0 0-2-2h-3V1h3ZM4 4H2v3h2V4Zm4 0H6v3h2V4Z"
    />
  </Svg>
)
export default LanguageIcon

import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const UnitedKingdomFlag = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
      <Path
        fill="#0052B4"
        d="M1.654 3.13A7.97 7.97 0 0 0 .276 5.912h4.161L1.654 3.13ZM15.725 5.913a7.971 7.971 0 0 0-1.379-2.784l-2.783 2.784h4.162ZM.276 10.087a7.973 7.973 0 0 0 1.378 2.784l2.783-2.784H.276ZM12.87 1.654A7.971 7.971 0 0 0 10.088.276v4.161l2.784-2.783ZM3.13 14.346a7.971 7.971 0 0 0 2.783 1.379v-4.162l-2.784 2.783ZM5.913.276a7.972 7.972 0 0 0-2.784 1.378l2.784 2.783V.276ZM10.087 15.725a7.97 7.97 0 0 0 2.784-1.379l-2.784-2.783v4.162ZM11.563 10.087l2.783 2.784a7.972 7.972 0 0 0 1.379-2.784h-4.162Z"
      />
      <Path
        fill="#D80027"
        d="M15.932 6.957H9.044V.067a8.08 8.08 0 0 0-2.087 0v6.89H.067a8.08 8.08 0 0 0 0 2.086h6.89v6.89a8.074 8.074 0 0 0 2.086 0v-6.89h6.89a8.074 8.074 0 0 0 0-2.086Z"
      />
      <Path
        fill="#D80027"
        d="m10.087 10.087 3.57 3.57c.164-.164.32-.336.47-.514l-3.056-3.056h-.984ZM5.913 10.087l-3.57 3.57c.164.164.336.32.514.47l3.056-3.056v-.984ZM5.913 5.913l-3.57-3.57c-.164.164-.32.336-.47.514l3.056 3.056h.984ZM10.087 5.913l3.57-3.57a7.994 7.994 0 0 0-.514-.47L10.087 4.93v.984Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default UnitedKingdomFlag


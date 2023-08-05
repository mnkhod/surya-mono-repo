import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

const VideoCallIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m9.333 6.833 2-1.5v4l-2-1.5v1.5H4.667v-4h4.666v1.5Zm-5.491 4.5h9.491v-8H2.667v8.924l1.175-.924Zm.461 1.334L1.333 15V2.667A.667.667 0 0 1 2 2h12a.667.667 0 0 1 .667.667V12a.667.667 0 0 1-.667.667H4.303Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default VideoCallIcon;

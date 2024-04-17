import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
const CheckRound = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Circle cx={24} cy={24} r={24} fill="#4ABC86" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M33.648 17.352a1.2 1.2 0 0 1 0 1.697l-11.2 11.2a1.2 1.2 0 0 1-1.697 0l-6.4-6.4a1.2 1.2 0 1 1 1.697-1.698l5.552 5.552 10.352-10.351a1.2 1.2 0 0 1 1.696 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CheckRound;

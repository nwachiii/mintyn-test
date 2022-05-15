import React from 'react';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

import logo from '../../assets/mint-logo.png';

const spin = keyframes`
  from { transform: rotate(-30deg); }
  to { transform: rotate(0deg); }
`;

export const MintLogo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} 3s linear`;

  return <Image my={4} borderRadius="xl" animation={animation} src={logo} {...props} />;
};

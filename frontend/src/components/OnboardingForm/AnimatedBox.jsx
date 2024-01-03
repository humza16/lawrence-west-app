import { Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles'

const animateHeight = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
    height: ${(props) => props.genericHeight};

  }
`;

const AnimatedBox = styled(Stack)(({ genericHeight, theme }) => ({
    animation: `${animateHeight} 2s ease!important`,
    transition: 'all 1.9s ease!important',
    height: genericHeight,
    // transition: theme.transitions.create(['height'], {
    //     easing: theme.transitions.easing.easeInOut,
    //     duration: theme.transitions.duration.standard,
    //     delay: 2
    // }),

}));

export default AnimatedBox;
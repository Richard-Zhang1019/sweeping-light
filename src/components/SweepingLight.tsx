import { Box, keyframes } from '@chakra-ui/react'
import { FC } from 'react'

interface SweepingLightProps {
  children?: React.ReactNode
}

const SweepingLight: FC<SweepingLightProps> = ({ children }) => {
  const sweep = keyframes`
    from { transform: translateX(-100%)}
    to { transform: translateX(200%) }
  `

  return (
    // 整个容器
    <Box
      position="relative"
      overflow="hidden"
      transition="opacity 300"
      opacity={1}
    >
      {/*  */}
      <Box
        position="absolute"
        top={0}
        left={0}
        animation={`${sweep} 1.3s linear infinite`}
        h="100%"
        w="100%"
      >
        {/* 扫动的光线 */}
        <Box
          h="100%"
          bgColor="#f1f1f1"
          w={80}
          transform="rotate(22.5deg) scaleY(2)"
          transformOrigin="top right"
        />
      </Box>
      {children}
    </Box>
  )
}

export default SweepingLight

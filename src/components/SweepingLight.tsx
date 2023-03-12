import { Box, keyframes } from '@chakra-ui/react'
import { FC } from 'react'

interface SweepingLightProps {
  // 包裹的子元素
  children: React.ReactNode
  // 线的宽度
  lightWidth?: number
  // 线的颜色
  lightBg?: string
  // 线的旋转角度
  lightRotate?: number
  // 动画持续时间
  duration?: number
}

// 封装为通用组件
const SweepingLight: FC<SweepingLightProps> = ({
  children,
  lightWidth = 80,
  lightBg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .24) 50.04%, rgba(255, 255, 255, 0) 99.37%)',
  lightRotate = 22.5,
  duration = 2.4
}) => {
  const sweep = keyframes`
    from { transform: translateX(-100%)}
    to { transform: translateX(200%) }
  `

  return (
    // 整个容器
    <Box
      position="relative"
      overflow="hidden"
      transition="opacity 300ms"
      opacity={1}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        animation={`${sweep} 2.4s infinite linear`}
        h="100%"
        w="100%"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* 扫动的光线 */}
        <Box
          h="100%"
          w={lightWidth}
          bg={lightBg}
          transform={`rotate(${lightRotate}deg) scaleY(2)`}
          transformOrigin="top right"
        />
      </Box>
      {children}
    </Box>
  )
}

export default SweepingLight

import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

import { useAppSelector } from '@/store'
import SweepingLight from '@/components/SweepingLight'

const About = () => {
  const { value } = useAppSelector(state => state.count)

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  `

  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <Box animation={`${rotate} 4s linear infinite`} h={50}>
        <FaReact size={50} />
      </Box>
      <h1>Yu-React-template</h1>
      <Box>redux count: {value}</Box>
      <SweepingLight>
        123
        <h1>Yu-React-template</h1>
        <h1>Yu-React-template</h1>
        <h1>Yu-React-template</h1>
        <h1>Yu-React-template</h1>
        <h1>Yu-React-template</h1>
      </SweepingLight>
    </Flex>
  )
}

export default About

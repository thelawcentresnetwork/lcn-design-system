import { NPSFeedback } from './Feedback'
import { Box, Text } from "@chakra-ui/react"
import { ChakraAwesome } from 'law-centres-design-system'

export default function NPSWidget(props) {

  const router = useRouter()

  return (
    <Box
      top="45%"
      right="0"
      position="fixed"
      zIndex="75"
      className="tourFeedback">
      <NPSFeedback
        originType="NPS"
        originName="Site-wide NPS Widget"
        originUrl={"http://design-system.lawcentres.org.uk/" + router.asPath}>
        <Box
          cursor="pointer"
          boxShadow="lg"
          bg="white"
          borderColor="gray.200"
          borderWidth="1px"
          fontFamily="Poppins"
          color="brand.Orange"
          fontWeight="500"
          fontSize="0.8rem"
          width="2.9rem"
          height="8rem"
          borderTopLeftRadius="xl"
          borderBottomLeftRadius="xl"
          _hover={{ boxShadow: 'none' }}
        >
          <Box transform="rotate(270deg)" width="8rem" position="relative" top="2.25rem" left="-2.6rem">
            <ChakraAwesome icon={['fas', 'messages']} mr="3" />
            <Text as="span">Feedback</Text>
          </Box>
        </Box>
      </NPSFeedback>
    </Box>
  )

}
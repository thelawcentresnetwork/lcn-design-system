import { Box } from "@chakra-ui/react"

export default function StickyBox(props) {
  return (
    <Box
      sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '1rem', }}
      {...props}
      />

  )
}

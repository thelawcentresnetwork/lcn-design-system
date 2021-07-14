import { Tab } from "@chakra-ui/react"

export default function SimpleTab(props) {
  return (
    <Tab
      fontFamily="Poppins, Helvetica, sans-serif"
      color="gray.400"
      fontWeight="600"
      fontSize="sm"
      px="6"
      _focus={{ outline: "none" }}
      _hover={{ color: "brand.Green", borderColor: "brand.Green" }}
      _selected={{ color: "brand.Green", borderColor: "brand.Green" }}
      {...props}
    >
      {props.children}
    </Tab>
  )
}

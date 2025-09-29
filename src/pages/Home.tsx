import { useState } from "react"
import { useMusics } from "../services/useMusics"
import {
  Box,
  Flex,
  Input,
  List,
  ListItem,
  Spinner,
  Text,
  useTheme,
  Image,
  Heading,
} from "@chakra-ui/react"
import woodstock from "../assets/woodstock.png"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const { musics, loading } = useMusics()
  const [query, setQuery] = useState("")
  const theme = useTheme()
  const navigate = useNavigate()

  if (loading) {
    return (
      <Flex
        align="center"
        justify="center"
        h="100vh"
        w="100vw"
        bg="black"
      >
        <Spinner size="xl" color="brand.500" />
      </Flex>
    )
  }

  const filtered = musics.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  )

  const highlightMatch = (text: string, query: string) => {
    if (!query)
      return <Text as="span" color={theme.colors.white}>{text}</Text>

    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Text as="span" key={i} color={theme.colors.brand[500]} fontWeight="bold">
              {part}
            </Text>
          ) : (
            <Text as="span" key={i} color={theme.colors.white}>
              {part}
            </Text>
          )
        )}
      </>
    )
  }

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      w="100vw"
      bg="black"
    >
      <Box
        maxW="600px"
        w="100%"
        px={4}
        position="relative"
        textAlign="center"
        transform="translateY(-120px)"
      >

        <Image
          src={woodstock}
          alt="Woodstock"
          mx="auto"
          mb={0}
          maxW="300px"
          w="70%"
          objectFit="contain"
        />

        <Heading as="h1" size="lg" mb={6} color="white">
          Encontre sua{" "}
          <Text as="span" color="yellow.300">
            música
          </Text>
        </Heading>


        <Input
          placeholder="Buscar música..."
          size="lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          bg="gray.900"
          color="white"
          _placeholder={{ color: "gray.500" }}
          borderColor="brand.500"
          focusBorderColor="brand.500"
          borderRadius="10"
          cursor="default"
          _focus={{ cursor: "default" }}
        />

        {query && (
          <Box
            position="absolute"
            top="100%"
            left={3}
            right={0}
            mt={2}
            border="1px solid"
            borderColor="brand.500"
            borderRadius="md"
            bg="gray.900"
            boxShadow="md"
            maxH="300px"
            overflowY="auto"
            zIndex={10}
            width="95%"
          >
            <List>
              {filtered.length > 0 ? (
                filtered.map((m) => (
                  <ListItem
                    key={m.id}
                    px={4}
                    py={2}
                    cursor="pointer"
                    _hover={{ bg: "yellow.500", color: "black" }}
                    onClick={() => navigate(`/music/${m.id}`, { state: m })}
                  >
                    {highlightMatch(m.title, query)}
                  </ListItem>
                ))
              ) : (
                <ListItem px={4} py={2} color="gray.500">
                  Nenhuma música encontrada.
                </ListItem>
              )}
            </List>
          </Box>
        )}

      </Box>

    </Flex>
  )
}

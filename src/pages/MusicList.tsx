// pages/MusicList.tsx
import { useMusics } from "../services/useMusics"
import {
    Box,
    Flex,
    Heading,
    List,
    ListItem,
    Icon,
    Text,
} from "@chakra-ui/react"
import { FaMusic } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import SidebarDrawer from "../components/sidebar"

export default function MusicList() {
    const { musics, loading } = useMusics()
    const navigate = useNavigate()

    if (loading) return <Text color="yellow.300">Carregando...</Text>

    return (
        <Flex minH="100vh" bg="black">
            <Flex
                align="center"
                justify="center"
                position="fixed"
                top={2}
                left={0}
                right={0}
                h="60px"
                px={5}
                bg="black"
                borderBottom="1px solid"
                borderColor="yellow.400"
                zIndex={10}
            >
                <SidebarDrawer />
                <Heading
                    size="md"
                    color="yellow.300"
                    textAlign="center"
                    fontFamily="Exo 2"
                >
                    Todas as músicas
                </Heading>
            </Flex>

            <Box pt="72px" overflowY="auto" ml="5vw" mt={2}>
                <List spacing={3} maxW="100%" mx="auto" w="100%" px={4}>
                    {musics.map((m) => (
                        <ListItem
                            key={m.id}
                            w="100%"
                            p={4}
                            borderRadius="lg"
                            bg="gray.800"
                            boxShadow="sm"
                            cursor="pointer"
                            transition="all 0.2s"
                            _hover={{
                                bg: "gray.700",
                                transform: "scale(1.02)",
                                boxShadow: "md",
                            }}
                            onClick={() => navigate(`/music/${m.id}`, { state: m })}
                        >
                            <Flex align="center">
                                <Icon as={FaMusic} boxSize={6} color="yellow.400" mr={3} />
                                <Text fontWeight="bold" color="white">
                                    {m.title}
                                </Text>
                            </Flex>
                        </ListItem>
                    ))}
                </List>

            </Box>
        </Flex>
    )
}

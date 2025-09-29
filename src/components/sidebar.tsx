import {
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    VStack,
    HStack,
    Text,
    Box,
} from "@chakra-ui/react"
import { HamburgerIcon, StarIcon, InfoIcon, SearchIcon, ChatIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"

export default function SidebarDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {/* Botão do menu (☰) */}
            <IconButton
                aria-label="Abrir menu"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                position="fixed"
                top={4}
                left={4}
                zIndex={20}
                bg="gray.900"
                color="yellow.300"


            />

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="black" color="white">
                    <DrawerCloseButton _hover={{ color: "yellow.400" }} />
                    <DrawerHeader fontWeight="bold" color="yellow.500">
                        Menu
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack align="stretch" spacing={6} >

                            <HStack as={RouterLink} to="/" onClick={onClose} spacing={3} _hover={{ color: "yellow.400" }}>
                                <SearchIcon color="yellow.500" boxSize={5} />
                                <Box>
                                    <Text fontWeight="bold">Home</Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Pesquise as músicas por nome
                                    </Text>
                                </Box>
                            </HStack>

                            <HStack as={RouterLink} to="/all" onClick={onClose} spacing={3} _hover={{ color: "yellow.400" }}>
                                <StarIcon color="yellow.500" boxSize={5} />
                                <Box>
                                    <Text fontWeight="bold">Todas</Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Veja todas as músicas
                                    </Text>
                                </Box>
                            </HStack>

                            <HStack as={RouterLink} to="/about" onClick={onClose} spacing={3} _hover={{ color: "yellow.400" }}>
                                <InfoIcon color="yellow.500" boxSize={5} />
                                <Box>
                                    <Text fontWeight="bold">Sobre</Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Mais informações
                                    </Text>
                                </Box>
                            </HStack>
                            <HStack
                                as={RouterLink}
                                //to="/suggestions"
                                onClick={onClose}
                                spacing={3}
                                _hover={{ color: "yellow.400" }}
                            >
                                <ChatIcon color="yellow.500" boxSize={5} />
                                <Box>
                                    <Text fontWeight="bold">Sugestões</Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Sugira músicas que deveriam ser adiciondas ou melhorias do app
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

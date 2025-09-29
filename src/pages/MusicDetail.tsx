import { useParams, useLocation } from "react-router-dom"
import {
    Box,
    Button,
    Heading,
    Image,
    Flex,
    Spinner,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { DownloadIcon } from "@chakra-ui/icons"

export default function MusicDetail() {
    const { id } = useParams()
    const location = useLocation()
    const music = location.state

    const [loadingImg, setLoadingImg] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDownload = async () => {
        const response = await fetch(music?.url)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${music?.title || "musica"}.jpg`
        a.click()
        window.URL.revokeObjectURL(url)
    }



    return (
        <Flex
            direction="column"
            align="center"
            justify="flex-start"
            h="100vh"
            w="100vw"
            bg="black"
            color="white"
            p={6}
        >
            <Heading size="md" color="yellow.300" textAlign="center">
                {music?.title || `Música ${id}`}
            </Heading>

            <Box>
                {loadingImg && (
                    <Flex
                        align="center"
                        justify="center"
                        w="100%"
                        h="300px"
                        borderRadius="md"
                    >
                        <Spinner size="xl" color="yellow.300" />
                    </Flex>
                )}

                <Image
                    src={music?.url}
                    alt={music?.title}
                    w="90%"
                    maxW="750px"
                    maxH="750px"
                    objectFit="contain"
                    onLoad={() => setLoadingImg(false)}
                    display={loadingImg ? "none" : "block"}
                    borderRadius="md"
                    mt={100}
                    cursor="pointer"
                    onClick={onOpen}
                    mx="auto"
                    borderWidth="thin"
                    borderColor="yellow.500"
                />
            </Box>

            <Heading size="sm" mt={3}>Clique na imagem, se não quiser baixar 😉</Heading>



            <Button
                onClick={handleDownload}
                variant="outline"
                borderColor="yellow.400"
                color="yellow.400"
                _hover={{ bg: "yellow.400", color: "black" }}
                mt={5}
                leftIcon={<DownloadIcon />}
            >
                Download
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay bg="blackAlpha.900" />

                <ModalContent
                    bg="transparent"
                    boxShadow="none"
                    m="0"
                    p="0"
                    maxW="100vw"
                    maxH="100vh"
                    display="flex"
                >
                    <ModalCloseButton color="white" size="lg" zIndex={10} />

                    <Flex
                        justify="center"
                        w="100vw"
                        h="100vh"
                    >
                        <Image
                            src={music?.url}
                            alt={music?.title}
                            w="100%"
                            h="100%"
                            objectFit="contain"
                        />
                    </Flex>
                </ModalContent>
            </Modal>

        </Flex>
    )
}

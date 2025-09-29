// pages/About.tsx
import { Box, Heading, Text, VStack, Divider, Link } from "@chakra-ui/react"

export default function About() {
    return (
        <Box
            bg="black"
            color="white"
            minH="100vh"
            w="100vw"
            p={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <VStack
                maxW="800px"
                w="fit-content"
                border="1px solid"
                borderColor="yellow.400"
                borderRadius="md"
                p={8}
                bg="gray.900"
                boxShadow="lg"
                align="center"
            >
                <Heading size="lg" color="yellow.300" textAlign="center">
                    Sobre o Projeto
                </Heading>
                <Divider borderColor="yellow.400" />

                <Text fontSize="md" textAlign="justify">
                    Este projeto nasceu para facilitar o acesso a músicas, letras e cifras,
                    do segue-me com uma interface simples e rápida. A ideia é ter um repositório
                    digital onde qualquer pessoa possa navegar, visualizar e baixar
                    músicas de forma prática.
                </Text>

                <Divider borderColor="yellow.400" />

                <Heading size="md" color="yellow.300" textAlign="center">
                    Contato
                </Heading>
                <Text fontSize="md" textAlign="center">
                    Para qualquer assunto ou sugestão, entre em contato pelo e-mail:{" "}
                    <Link
                        href="mailto:correia.jv16@gmail.com"
                        color="yellow.300"
                        fontWeight="bold"
                    >
                        correia.jv16@gmail.com
                    </Link>
                </Text>
                <Divider borderColor="yellow.400" mt={3} />

                <Heading size="md" color="yellow.300" textAlign="center">
                    Base de dados
                </Heading>
                <Text fontSize="md" textAlign="center">
                    As músicas aqui presentes foram tiradas dos livros:
                </Text>
                <VStack spacing={1} align="center">
                    <Text fontSize="md" color="yellow.300">• Vigília e Liturgia 2019 - NB</Text>
                    <Text fontSize="md" color="yellow.300">• Vigília e Liturgia 2024 - NB</Text>
                    <Text fontSize="md" color="yellow.300">• Canto 2025 - NB</Text>
                </VStack>
            </VStack>
        </Box>
    )
}

import {Box, Flex, Text} from '@chakra-ui/react';

export default function Layout({children}) {
  return (
    <Box bg="gray.900" minHeight="100vh">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={process.env.NEXT_PUBLIC_APP_HEADER_COLOR || '#1a202c'}
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          {process.env.NEXT_PUBLIC_APP_NAME || 'AICore'}
        </Text>
      </Flex>
      <Box as="main" padding="2rem">
        {children}
      </Box>
    </Box>
  );
}

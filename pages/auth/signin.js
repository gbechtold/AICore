import {useState} from 'react';
import {signIn} from 'next-auth/react';
import {Box, Button, FormControl, FormLabel, Input, VStack} from '@chakra-ui/react';
import Layout from '../../components/Layout';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn('credentials', {username, password, callbackUrl: '/chat'});
  };

  return (
    <Layout>
      <Box maxWidth="400px" margin="auto">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Benutzername</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bg="white"
                color="black"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Passwort</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                bg="white"
                color="black"
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Anmelden
            </Button>
          </VStack>
        </form>
      </Box>
    </Layout>
  );
}

import {useState, useEffect} from 'react';
import {Box, Input, Button, VStack, Text} from '@chakra-ui/react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import Layout from '../components/Layout';

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {role: 'user', content: input};
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, data.message]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (status === 'loading') {
    return <Text>Laden...</Text>;
  }

  if (!session) {
    return null;
  }

  return (
    <Layout>
      <VStack spacing={4} align="stretch">
        <Box flexGrow={1} overflowY="auto" height="calc(100vh - 250px)">
          {messages.map((msg, index) => (
            <Box
              key={index}
              bg={msg.role === 'user' ? 'black.500' : 'green.500'}
              color="white"
              p={2}
              borderRadius="md"
              mb={2}
            >
              {msg.content}
            </Box>
          ))}
        </Box>
        <form onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Wie kann ich ihnen helfen?..."
            width="90%"
            mx="auto"
            bg="white"
            color="black"
          />
          <Button type="submit" mt={2} colorScheme="black">
            Senden
          </Button>
        </form>
      </VStack>
    </Layout>
  );
}

import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/react';
import Layout from '../components/Layout';
import {Box, Heading, Text, Button} from '@chakra-ui/react';

export default function Home() {
  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (session) {
      router.push('/chat');
    }
  }, [session, router]);

  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={6}>
          Willkommen bei {process.env.NEXT_PUBLIC_APP_NAME || 'AICore'}
        </Heading>
        <Text fontSize="xl" mb={6}>
          Eine leistungsstarke KI-Chat-Anwendung
        </Text>
        {!session ? (
          <Button colorScheme="blue" size="lg" onClick={() => router.push('/auth/signin')}>
            Anmelden
          </Button>
        ) : (
          <Text>Weiterleitung zum Chat...</Text>
        )}
      </Box>
    </Layout>
  );
}

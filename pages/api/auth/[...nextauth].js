import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'Username', type: 'text'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if (credentials.username === process.env.AUTH_USERNAME && credentials.password === process.env.AUTH_PASSWORD) {
          return {id: 1, name: credentials.username};
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({session, token}) {
      session.user.id = token.sub;
      return session;
    },
  },
});

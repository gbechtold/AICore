# AICore

AICore is a powerful AI-driven chat application built with Next.js and OpenAI's GPT model. It provides a secure, interactive chat interface where users can engage with an AI assistant for various tasks and conversations.

## Features

- AI-powered chat interface
- User authentication
- Responsive design using Chakra UI
- Server-side rendering with Next.js
- Integration with OpenAI's GPT model

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 18.17 or later
- npm (usually comes with Node.js)
- An OpenAI API key

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/gbechtold/aicore.git
   cd aicore
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   OPENAI_API_KEY=your_openai_api_key
   AUTH_USERNAME=your_chosen_username
   AUTH_PASSWORD=your_chosen_password
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=some_random_string
   ```

   Optionally, you can also set:

   ```
   NEXT_PUBLIC_APP_NAME=YourAppName
   NEXT_PUBLIC_APP_HEADER_COLOR=#your_header_color
   NEXT_PUBLIC_APP_PREFIX_TEXT=Your AI assistant prefix
   NEXT_PUBLIC_APP_POSTFIX_TEXT=Your AI assistant postfix
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the application for production:

```
npm run build
```

To start the production server:

```
npm start
```

## Project Structure

- `pages/`: Contains the main pages of the application
  - `api/`: API routes for authentication and chat
  - `auth/`: Authentication-related pages
  - `chat.js`: Main chat interface
  - `index.js`: Home page
- `components/`: Reusable React components
- `styles/`: CSS modules and global styles

## Contributing

Contributions to AICore are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

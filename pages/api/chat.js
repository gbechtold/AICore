import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: 'Method not allowed'});
  }

  try {
    const {messages} = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `${process.env.NEXT_PUBLIC_APP_PREFIX_TEXT || ''} ${process.env.NEXT_PUBLIC_APP_POSTFIX_TEXT || ''}`,
        },
        ...messages,
      ],
    });

    const responseMessage = completion.choices[0].message;

    res.status(200).json({message: responseMessage});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({message: 'An error occurred while processing your request.'});
  }
}

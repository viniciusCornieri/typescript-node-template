import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_request, response) => response.json({ message: 'Hello World' }));

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started');
});

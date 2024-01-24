import 'dotenv/config';
import { app } from './app.js';

app.listen(process.env.PORT, () => {
  console.log(`Server ready on: http://localhost:${process.env.PORT}`);
});

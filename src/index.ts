import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './server';

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(
        `⚡️ Server started and running on port ${process.env.PORT || 5000}`
      )
    )
  )
  .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

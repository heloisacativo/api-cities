import { server } from './server/Server';

server.listen(process.env.PORT || 3333, () => console.log(`App running on port ${process.env.PORT || 3333}`));

// server.listen(3333, () => console.log('App running'));

// terminal: npx ts-node-dev ./src/index.ts > npm start
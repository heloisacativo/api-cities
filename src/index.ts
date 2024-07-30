import { server } from './server/Server';

server.listen(3333, () => console.log('App running'));

// terminal: npx ts-node-dev ./src/index.ts
import http from 'http';

import app from './app';
import { connectToDatabase } from './config/database';

/**
 * Start Express server.
 */
export const httpServer = http.createServer(app);

// graphqlServer.installSubscriptionHandlers(httpServer);
const server = httpServer.listen(app.get('port'), () => {
  connectToDatabase();
  console.log(
    '🚀 App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
});

export default server;

import * as Fastify from 'fastify';

export default function createServer(opts?: Fastify.ServerOptions) {
  const fastify = Fastify(opts);

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/twitter', async (request, reply) => {
    return { twitterHandle: request.query.handle };
  });

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/api/users', async (request, reply) => {
    return { users: [{ first: 'Mike', last: 'Upton' }] };
  });

  /* eslint-disable-next-line no-unused-vars */
  fastify.get('/api/timestamp', async (request, reply) => {
    return { date: new Date() };
  });

  return fastify;
}

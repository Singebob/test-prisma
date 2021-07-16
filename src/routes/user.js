import context from "./../context.js";

const findUsers = {
  method: 'GET',
  path: '/users',
  handler: () => context.prisma.user.findMany(),
}

export default [findUsers]
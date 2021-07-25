import context from "./../context.js";

const findUsers = async function findUsers() {
  return context.prisma.user.findMany()
}

const createUser = async function createUser(request, h) {
  return context.prisma.user.create({"data": request.payload})
}

export default { findUsers, createUser }
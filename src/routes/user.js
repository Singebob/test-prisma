import user from "./../controller/user.js"
import userController from "./../controller/user.js"

const findUsers = {
  method: 'GET',
  path: '/users',
  handler: userController.findUsers,
}

const createUser = {
  method: 'POST',
  path: '/users',
  handler: userController.createUser,
}

export default [findUsers, createUser]
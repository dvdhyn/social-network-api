const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
  getFriends
} = require('../../controllers/userController');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

router
  .route('/:userId/friends')
  .get(getFriends);

module.exports = router;

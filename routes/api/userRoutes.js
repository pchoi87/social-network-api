const router = require('express').Router();
const { User, Thought } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({}).populate(['friends', 'thoughts']).select('-__v');
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(['friends', 'thoughts']).select('-__v');
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.put('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    await Thought.deleteMany({ _id: { $in: user.thoughts } });
    await User.findByIdAndDelete(req.params.userId);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.post('/:userId/friends', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.friends.push(req.body.friendId);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.friends.pull(req.params.friendId);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;

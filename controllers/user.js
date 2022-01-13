const { ObjectId } = require('../models/user');
exports.addUser = (req, res) => {
  const { usersCollection } = req.app.locals;
  // Insert data to collection
  usersCollection.insertOne(req.body).then((result) => {
    console.log(result);
  });
  res.status(200).json('Data successfully saved');
};
exports.getAllUsers = (req, res) => {
  const { usersCollection } = req.app.locals;
  // find All 
  usersCollection
    .find()
    .toArray()
    .then((result) => {
      res.status(200).json(result);
    });
};
exports.getUser = (req, res) => {
  const { usersCollection } = req.app.locals;
  // find users based on id
  usersCollection.findOne({ _id: ObjectId(req.params.id) }).then((result) => {
    res.status(200).json(result);
  });
};
exports.updateUser = (req, res) => {
  const { usersCollection } = req.app.locals;
  // update data collection
  usersCollection
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: { nama: req.body.nama, job: req.body.job } })
    .then((result) => {
      console.log(result);
    });
  res.status(200).json('Data successfully updated');
};
exports.deleteUser = (req, res) => {
  const { usersCollection } = req.app.locals;
  // delete data collection
  usersCollection.deleteOne({ _id: ObjectId(req.params.id) }).then((result) => {
    console.log(result);
  });
  res.status(200).json('Data successfully deleted');
};
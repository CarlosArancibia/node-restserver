const { response } = require("express"); // optional, typed

const usersGet = (req, res = response) => {
  const { page, limit } = req.query; // query params (url - optional)

  res.json({
    msg: "get API",
    page,
    limit,
  });
};

const usersPost = (req, res = response) => {
  const { name, age } = req.body;

  res.json({
    msg: "post API",
    name,
    age,
  });
};

const usersPut = (req, res = response) => {
  const { id } = req.params; // segment params (url)

  res.json({
    msg: "put API",
    id,
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
};

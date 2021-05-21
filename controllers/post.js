exports.getPosts = (req, res) => {
  res.json({
    posts: [
      { title: "First post" },
      { title: "First second" },
      { title: "First third" },
      { title: "First fourth" },
      { title: "First fifth" },
    ],
  });
};

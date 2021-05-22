exports.createPostValidator = (req, res, next) => {
  // TITLE
  req.check("title", "Write a title").notEmpty();
  req
    .check("title", "Tittle must be between 5 to 150 characters")
    .isLength({ min: 5, max: 150 });

  // BODY
  req.check("body", "Write a body").notEmpty();
  req.check("body", "Body must be between 5 and 2000 characters").isLength({
    min: 5,
    max: 2000,
  });

  // CHECK FOR ERRORS
  const errors = req.validationErrors();
  // if error show the first one as they happen
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  //PROCEED TO NEXT MIDDLEWARE
  next();
};

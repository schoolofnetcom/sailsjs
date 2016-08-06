/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res, next) {
    Blog.find()
        .exec(function(err, result) {
          console.log(result);
          return res.view('blog/list', {
            data: result
          });
        });
  },
  new: function(req, res, next) {
    return res.view('blog/create', {
      title: 'Create a new Post'
    });
  },
  create: function(req, res, next) {
    Blog.create(req.body)
        .exec(function(err, result) {
          return res.redirect('/posts');
        });
  },
  show: function(req, res, next) {
    Blog.findOne({
      id: req.params.id
    }).exec(function(err, result) {
      console.log(result)
      return res.view('blog/show', {
        data: result,
        title: 'Show'
      });
    });
  },
  edit: function(req, res, next) {
    Blog.findOne({
      id: req.params.id
    }).exec(function(err, result) {
      return res.view('blog/edit', {
        data: result,
        title: 'Edit'
      })
    });
  },
  update: function(req, res, next) {
    Blog.update({
      id: req.params.id
    }, req.body).exec(function(err, result) {
      res.redirect('/posts');
    });
  },
  destroy: function(req, res, next) {
    Blog.destroy({
      id: req.params.id
    }).exec(function(err) {
      // return res.send('OK');
      return res.redirect('/posts');
    });
  }
};


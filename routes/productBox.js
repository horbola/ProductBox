var express = require('express');
var router = express.Router();

/* prduct-box home page. */
//Handler for germin-vivoactive-4
router.get('/germin-vivoactive-4', function(req, res, next) {
  res.render('groups/product-box/germin-vivoactive-4-a', { title: 'germin-vivoactive-4' });
});

//Handler for germin-vivoactive-4-custom
router.get('/germin-vivoactive-4-custom', function(req, res, next) {
  res.render('groups/product-box/germin-vivoactive-4-custom-a', { title: 'germin-vivoactive-4-custom' });
});

//Handler for asus-chromebook
router.get('/asus-chromebook', function(req, res, next) {
  res.render('groups/product-box/asus-chromebook-a', { title: 'asus-chromebook' });
});

//Handler for asus-chromebook-shadow
router.get('/asus-chromebook-shadow', function(req, res, next) {
  res.render('groups/product-box/asus-chromebook-shadow-a', { title: 'asus-chromebook-shadow' });
});

//Handler for 9mm-pistol
router.get('/9mm-pistol', function(req, res, next) {
  res.render('groups/product-box/9mm-pistol-a', { title: '9mm-pistol' });
});

//Handler for 9mm-pistol-fore-img
router.get('/9mm-pistol-fore-img', function(req, res, next) {
  res.render('groups/product-box/9mm-pistol-fore-img-a', { title: '9mm-pistol-fore-img' });
});

//Handler for 9mm-pistol-fore-img-skelcss
router.get('/9mm-pistol-fore-img-skelcss', function(req, res, next) {
  res.render('groups/product-box/9mm-pistol-fore-img-skelcss-a', { title: '9mm-pistol-fore-img-skelcss' });
});

//Handler for product-box
router.get('/product-box', function(req, res, next) {
  res.render('singlets/product-box-a', { title: 'product-box' });
});

//Handler for product-box
router.get('/p', function(req, res, next) {
  res.render('singlets/p', { title: 'product-box' });
});


module.exports = router;

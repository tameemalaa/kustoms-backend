const express = require('express');
const customer = require('../controllers/customer');

const router = express.Router();

router.post('/', customer.blog_create_post);
router.post('/signin', customer.postCustomerSignUp);
router.post('/signup', customer.postCustomerSignIn);
router.post('/rest', customer.blog_delete);
router.post('/delete', customer.blog_delete);
router.get('/address', customer.blog_delete);
router.get('/cart', customer.blog_delete);
router.get('/orders', customer.blog_delete);
router.get('/settings', customer.blog_delete);
router.post('/settings', customer.blog_delete);

module.exports = router;

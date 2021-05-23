var express = require('express');
var router = express.Router();

const data = [
  {
    id: 1,
    title: "溫蒂漢堡"
  }
]

// http://localhost:3000/api/products
router.get('/products', function(req, res, next) {

  res.send({
    success: true,
    data
  });
  res.end();//結束

});

router.post('/products', function(req,res) {

  const product = req.body;
  data.push({
    ...product,
    id: new Date().getTime()
  })
  console.log(data);

  res.send({
    success: true,
    data
  });
  res.end();

});

//api/product/id
router.delete('/product/:id', function(req,res) {

  const id = req.params.id;
  console.log(id);

  //確認品項是否存在
  data.forEach((item, key) => {
    if(item.id == id) { //與用戶傳來id一致+型別需轉換 因此用非嚴謹模式
      data.splice(key, 1);
    }
  });
  console.log(data);

  res.send({
    success: true,
    data
  });
  res.end();

});

module.exports = router;

const express = require('express')
const utility = require('utility')

const app = express()

app.get('/', (req, res) => {
  const { q } = req.query
  if( q ){
    // const md5Value = utility.md5(q)
    const md5Value = utility.sha1(q)
    res.send(md5Value)
  }else{
    res.send('传个query参数呀~~')
  }

})

app.listen(3000, () => {
  console.log('3000端口启动成功')
})
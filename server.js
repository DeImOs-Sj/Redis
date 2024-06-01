const express = require('express')
const app = express()
const client = require('./client')
const axios=require('axios').default



app.get('/', async (req, res) => {
    
    const cacheValue = await client.get('todos')
    if (cacheValue) return res.json(JSON.parse(cacheValue))
    

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')

    await client.set('todos',JSON.stringify(data))
    await client.expire('todos',20)
    return res.json(data)
})  
    



app.listen(9000,()=>{console.log("running on server 9000")})
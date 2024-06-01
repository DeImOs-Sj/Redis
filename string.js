const client = require('./client')


async function init() {
    // const set = await client.set("msg1", "Heyyyy")
    // await client.expire("msg1",10)
    // await client.lpush("msg3", "1")
    // await client.lpush("msg3","hello from lpsuh2")
    // await client.lpush("msg3","hello from lpsuh3")
    // await client.lpush("msg3","hello from lpsuh4")
    // await client.lpush("msg3","hello from lpsuh5")
    // await client.lpush("msg3","hello from lpsuh6")
 
    const result = await client.xadd('msg3',"t",2)
    console.log(result)

}

init()
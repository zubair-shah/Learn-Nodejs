setTimeout((req,res) => {
  throw new Error('oops Error')
},300)

process.on('uncaughtException' , (err) => {
  throw new Error('Error: ' + err.message)
})

process.on('unhandledRejection' , (err) => {
    throw new Error('Error: ' + err.message)
})
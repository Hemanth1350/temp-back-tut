const os = require('os')

//current user info

const user = os.userInfo
console.log(user)

//method returns the uptime in sec
console.log(`The system update is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

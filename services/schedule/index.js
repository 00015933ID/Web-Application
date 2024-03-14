const fs = require('fs')

// access global mock db file
const schedules = require(global.plan_db)

// write service method implementations
const schedule_service = {
    getAll() {
        return schedules
    },
    getById(id) {
        return schedules.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const schedule = req.body

        const new_schedule = {
            id: new_id,
            schedule: schedule
        }

        schedules.push(new_schedule)
        
        writeToFile(schedules)
        
        return new_schedule
    },
    delete(id) {
        const index = schedules.findIndex(u => u.id == id)
        schedules.splice(index, 1)    
        writeToFile(schedules)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.plan_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = schedule_service


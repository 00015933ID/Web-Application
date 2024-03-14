const fs = require('fs')// Importing the file system module

// Accessing the global mock database file
const schedules = require(global.plan_db)// Loading data from the global plan_db file


// Defining service method implementations
const schedule_service = {
    // Method to get all schedules
    getAll() {
        return schedules// Returning all schedules
    },
    getById(id) {
        return schedules.find(t => t.id == id)
    },   
    // Method to create a new schedule 
    create(req, res) {
        let new_id = genRandId(4)// Generating a random ID
                
        const schedule = req.body// Extracting schedule data from the request body


        const new_schedule = {
            id: new_id,
            schedule: schedule
        }

        schedules.push(new_schedule)// Adding the new schedule to the schedules array
        
        writeToFile(schedules)
        
        return new_schedule// Returning the newly created schedule
    },
    // Method to update a schedule
    update(id, updateData){
        const scheduleIndex = schedules.findIndex(t => t.id == id)

        if (scheduleIndex === -1) {
            return null
        }

        schedules[scheduleIndex].schedule = { ...schedules[scheduleIndex].schedule, ...updateData }

        writeToFile(schedules)

        return schedules[scheduleIndex]
    },
    // Method to delete a schedule
    delete(id) {
        const index = schedules.findIndex(u => u.id == id)
        schedules.splice(index, 1)// Removing the schedule from the array  
        writeToFile(schedules)
    }
}

// Function for overwriting the database file with updated content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.plan_db,
            JSON.stringify(// Converting data to JSON format
                users, null, 4
            ),
            'utf8'
        )
}

// Function to generate a random ID
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = schedule_service// Exporting the schedule service module


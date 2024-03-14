// Importing the schedule service
const schedule_service = require('../../../services/schedule')
// Defining the homeController object
const homeController = {
    // Method to render the index page
    index: async (req, res) =>{
        res.render('home');// Rendering the home page view
    },
    // Method to render the add page
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    // Method to render the update page
    update: async (req, res) =>{
        // Retrieving the event data for the specified ID
        const eventData = await schedule_service.getById(req.params.id);
        // Rendering the add_update view with mode set to 'Update' and passing the event data
        res.render('home/add_update', { mode: 'Update', eventData: eventData });
    }
};
// Exporting the homeController object to be used in other parts of the application
module.exports = homeController;

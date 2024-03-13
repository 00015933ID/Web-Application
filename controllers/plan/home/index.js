// Define the homeController object
const homeController = {
    // Define the index method, which is an asynchronous function
    index: async (req, res) =>{
        // Render the 'home' view template
        // This assumes that I am using a templating engine like EJS, Handlebars, Pug, etc.
        // The 'res.render' method is typically used to render dynamic content using a template engine
        res.render('home');
    },
    // Function to render the add_update view for adding a new to-do item
    add: async (req, res) =>{
        res.render('home/add_update');
    },
    // Function to render the add_update view for updating an existing to-do item
    update: async (req, res) =>{
        res.render('home/add_update');
    }

};
// Export the homeController object so that it can be imported and used in other parts of the application
module.exports = homeController;

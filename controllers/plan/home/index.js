const schedule_service = require('../../../services/schedule')

const homeController = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    update: async (req, res) =>{
        const eventData = await schedule_service.getById(req.params.id);
        res.render('home/add_update', { mode: 'Update', eventData: eventData });
    }
};
  
module.exports = homeController;

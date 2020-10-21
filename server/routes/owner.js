const router = require('express').Router()
const Owner = require('../models/owner');

// Post Api
router.post('/owners', async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        await owner.save();

        res.json({
            success: true,
            message: "successfully created!"
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
});

// Get Api
router.get("/owners", async (req, res) => {
    try {
        let owners = await Owner.find();

        res.json({
            owners: owners
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
})

module.exports = router;
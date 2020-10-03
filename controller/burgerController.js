const burgers = require("../models/burger.js")
const router = require("express").Router()

router.get("/", (req, res) => {
    burgers.selectAll((results) => {
        res.render("index", {burgerData : results})
    })
})

router.post("/api/burgers", (req, res) => {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(results) {
        res.redirect("/") //try without this line later
    })
})


//gets id from the html
router.put("/api/burgers/:id", (req, res) => {
    var condition =  req.params.id
    var colVal = "devoured = true"  
    burgers.updateOne(["devoured", "id"], [true, req.params.id], function(results) {  //code front end js to make this true immedatiely on front end. 
        res.json(results)
    })
}) //need. This seems correct to me, but not sure. basically very similar to insertOne(). and im sure the redirect is correct since it is a post. 
// also want another explanation of the high level concept and how the objects interact.

// if (results.changedRows === 0) {
        //     return res.status(404)
        // }
        // else {
        //     res.status(200)
        //     res.redirect("/")
        // }
module.exports = router
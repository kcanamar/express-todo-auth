// =====================
// Class Based Controller
// =====================
class MainCtrl{

    example(req, res) {
        res.render("example.ejs", {
            text: "This is an example API route"
        })
    }
}

// ====================
// Export
// ====================
module.exports = MainCtrl
// =====================
// Class Based Controller
// =====================
class APICtrl{

    example(req, res) {
        res.render("example.ejs", {
            text: "This is an example API route"
        })
    }
}

// ====================
// Export
// ====================
module.exports = APICtrl
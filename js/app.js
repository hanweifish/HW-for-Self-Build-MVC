
// "xxxxxxx" is the part you should add


/* ======= Model ======= */
//Define the data model, add any images you like
var model = {
    currentLego: null,
    legos: [
        {
            clickCount : 0,
            name : "xxxxxxx",
            imgSrc : "xxxxxxx",
            imgAttribution : "xxxxxxx"
        },
        // add more
    ]
};

/* ======= Control ======= */

var control = {

    init: function() {
        model.currentLego = model.legos[0];
        legoListView.init();
        legoImageView.init();
    },

    // add more code to these methods

    getLegoAll: "xxxxxxx",

    setCurrentLego: "xxxxxxx",

    getCurrentLego: "xxxxxxx",

    increaseClick: "xxxxxxx",
};



/* ======= View ======= */

var legoListView = {

    init: function() {
        this.render();
    },

    render: function() {
        // render the list view on the page
        // add the click event on each list
        var clickfunction = function(lego) {
            //add more code
        }
    }
};

var legoImageView = {

    init: function() {

        //attach the click event here

        this.render();
    },

    render: function() {
        //render the list view on the page
    }

};


control.init();

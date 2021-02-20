// jshint esversion6

  exports.getDate = function getDate(){
    let options = { weekday: 'long',
                    day: 'numeric',
                    month: 'long'};

    let today = new Date();

    return day = today.toLocaleDateString("en-US", options);
}

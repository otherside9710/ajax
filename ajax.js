$.ajax({
    url: "getTotalesDashboard",
    type: "GET",
    data: {
        format: 'json'
    },
    success: function (result) {
        //Code Success
    },
    error : function (error) {
        //Code Error
    }
});
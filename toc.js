$(document).ready(function() {
    $("h2, h3").each(function(i) {
        var current = $(this);
        current.attr("id", "title" + i);
        $("#toc").append("<a id='link" + i + "' href='#title" + i + "' class='" + current.attr("tagName") + "'>" + current.html() + "</a>");
    });
});

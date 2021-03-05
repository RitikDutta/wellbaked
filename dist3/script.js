$(document).ready(function() {

    $("nav a").on("click", function(event) {
        event.preventDefault();
        $("nav").addClass("fixed");
        id = ($(this).attr("href"));
        scrollVertical = $(id).offset().top;

        $("body, html").animate({ scrollTop: scrollVertical });
    });

    $(document).on("scroll", function() {
        secondPage = $("nav li:nth-child(2) a").attr("href");

        if ($("body").scrollTop() >= $("nav").height()) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }
    });

});
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
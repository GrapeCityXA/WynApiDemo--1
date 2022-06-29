(function menuCollasible() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }

    });
  }
})();
(function navLink() {
  var tabs = document.getElementsByClassName("nav-link");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      if (this.classList.contains("active")) {
        return;
      }
      var activeTabs = document.getElementsByClassName("nav-link active");
      activeTabs[0].classList.remove("active");
      this.classList.add("active");

      var carContents = document.getElementsByClassName("card demo");
      for (var j = 0; j < carContents.length; j++) {
        var content = carContents[j];
        if (content.style.display === "block") {
          content.style.display = "none"
        } else {
          content.style.display = "block"
        }
      }
    })
  }
})()
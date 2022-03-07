var all = document.querySelectorAll(".cat-sec");
if (window.innerWidth > 992) {
  for (var i = 0; i < all.length; i++) {
    all[i].addEventListener("mouseover", function (event) {
      var classes = this.className;
      classes = classes.replace(
        new RegExp("col-lg-3 col-md-4", "g"),
        "cat-tile-expand col-md-5"
      );
      this.className = classes;
    });
  }
  for (var i = 0; i < all.length; i++) {
    all[i].addEventListener("mouseout", function (event) {
      var classes = this.className;
      classes = classes.replace(
        new RegExp("cat-tile-expand col-md-5", "g"),
        "col-lg-3 col-md-4"
      );
      this.className = classes;
    });
  }
}

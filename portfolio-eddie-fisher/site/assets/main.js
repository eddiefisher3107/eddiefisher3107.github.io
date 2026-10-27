document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("navlist").classList.toggle("open");
});
document.querySelectorAll("#navlist a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.getElementById("navlist").classList.remove("open");
  });
});

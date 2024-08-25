const menu = document.getElementById("menu");
const items = document.getElementById("items");
const detail = document.getElementById("detail");
const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");
const detailPrice = document.getElementById("detail-price");
const detailType = document.getElementById("detail-type");
const backBtn = document.getElementById("back");
const backToMainBtn = document.getElementById("back-to-main");
const pizzas = document.querySelectorAll("#pizzas, #pizzas-sub");
const bergers = document.querySelectorAll("#bergers, #bergers-sub");
const loading = document.getElementById("loading");
const subContainer = document.getElementById("sub-container");
const itemsContainer = document.getElementById("items-container");

if (backToMainBtn != null) {
  backToMainBtn.addEventListener(
    "click",
    function () {
      location.href = "./index.html";
    },
    false
  );
}

if (backToMainBtn != null) {
  backBtn.addEventListener(
    "click",
    function () {
      menu.classList.remove("d-none");
      detail.classList.add("d-none");
      window.scrollTo(0, 0);
    },
    false
  );
}

pizzas.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      getData("پیتزا");
    },
    false
  );
});

bergers.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      getData("برگر");
    },
    false
  );
});

function getData(sort) {
  items.innerHTML = "";
  $.ajax({
    type: "GET",
    url: "./assets/content.json",
    async: true,
    beforeSend: function () {
      menu.classList.replace("p-3", "p-2");
      itemsContainer.classList.remove("d-none");
      subContainer.style.display = "none";
      loading.classList.remove("d-none");
    },
    dataType: "json",
    success: function (result) {
      $.each(result, function (index, val) {
        for (var i = 0; i < val.length; i++) {
          loading.classList.add("d-none");
          var item = val[i];
          if (item.type == sort) {
            items.innerHTML +=
              "<div role='button' class='my-card card mb-3' onclick='menu.classList.add(\"d-none\"); detail.classList.remove(\"d-none\"); detailImage.src = this.childNodes[0].childNodes[0].src; detailTitle.textContent = this.childNodes[1].childNodes[0].textContent; detailText.textContent = this.childNodes[1].childNodes[1].textContent; detailPrice.textContent = this.childNodes[1].childNodes[2].childNodes[1].textContent; detailType.textContent = this.childNodes[1].childNodes[2].childNodes[0].textContent;'>" +
              '<div class="imagecontainer card-img-top">' +
              '<img src="' +
              item.image +
              '" class="" draggable="false" onerror="this.onerror=null; this.src=\'../assets/404.jpg\'" alt="main">' +
              "</div>" +
              '<div class="card-body">' +
              '<h5 class="card-title bold text-truncate">' +
              item.name +
              "</h5>" +
              '<p class="card-text">' +
              item.detail +
              "</p>" +
              '<div class="d-flex justify-content-between">' +
              '<div class="text-danger bold">' +
              "دسته : " +
              item.type +
              "</div>" +
              '<div class="text-success bold">' +
              item.price +
              " تومان" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";
          }
        }
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      loading.classList.add("d-none");
      items.innerHTML =
        "<div class='text-center'>" +
        "خطایی رخ داده است!" +
        "<br>" +
        "لطفا اینترنت خود را چک کنید." +
        "</div>";
    },
  });
}

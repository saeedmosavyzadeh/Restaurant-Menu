const menu = document.getElementById("menu");
const items = document.getElementById("items");
const detail = document.getElementById("detail");
const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");
const detailPrice = document.getElementById("detail-price");
const detailType = document.getElementById("detail-type");
const videoBtn = document.getElementById("video");
const backToMainBtn = document.getElementById("back-to-main");
const pizzas = document.querySelectorAll("#pizzas, #pizzas-sub");
const bergers = document.querySelectorAll("#bergers, #bergers-sub");
const loading = document.getElementById("loading");
const subContainer = document.getElementById("sub-container");
const itemsContainer = document.getElementById("items-container");
const sbMenu = document.querySelectorAll(".sb-menu");
const form = document.forms["register"];
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyT6lAgFjD9Q1JGaQQyIuBnHuMllr-lor2Nu3mGGpxOw_aPBqkcnP-4G5L9Ye7wOOxlUg/exec";
const RegLoading = document.getElementById("regloading");
const RegNotloading = document.getElementById("regnotloading");
const userFullName = document.getElementById("InputFullname");
const userBirthDate = document.getElementById("InputBirthday");
const userPhone = document.getElementById("InputPhone");
const RegBtn = document.getElementById("registerBtn");
const messageResult = document.getElementById("message-result");
const resultBody = document.getElementById("result-body");
const resultTitle = document.getElementById("result-title");

if (form != null) {
  const modal = new bootstrap.Modal(messageResult);
  jalaliDatepicker.startWatch({
    showTodayBtn: false,
    showEmptyBtn: false,
    showCloseBtn: false,
    maxDate: "today",
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      RegLoading.classList.remove("d-none");
      RegNotloading.classList.add("d-none");
      let formData = new FormData(form);
      userFullName.disabled = true;
      userBirthDate.disabled = true;
      userPhone.disabled = true;
      RegBtn.disabled = true;
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          form.reset();
          form.classList.remove("was-validated");
          resultTitle.innerHTML = "اطلاعات شما ثبت شد";
          resultBody.innerHTML =
            "تخفیفات و اطلاعیه های کافه رستوران آلفا برای شما ارسال خواهد شد.";
        })
        .catch((error) => {
          resultTitle.innerHTML = "خطا در ارسال اطلاعات";
          resultBody.innerHTML = error.message;
        })
        .then(() => {
          RegLoading.classList.add("d-none");
          RegNotloading.classList.remove("d-none");
          userFullName.disabled = false;
          userBirthDate.disabled = false;
          userPhone.disabled = false;
          RegBtn.disabled = false;
          modal.show();
        });
    } else {
      form.classList.add("was-validated");
    }
  });
}

if (backToMainBtn != null) {
  backToMainBtn.addEventListener(
    "click",
    function () {
      if (
        !detail.classList.contains("d-none") &&
        location.pathname.split("/").slice(-1)[0] != "todays-offer.html"
      ) {
        menu.classList.remove("d-none");
        detail.classList.add("d-none");
        window.scrollTo(0, 0);
      } else {
        location.href = "./menu.html";
      }
    },
    false
  );
}

if (videoBtn != null) {
  videoBtn.addEventListener(
    "click",
    function () {
      // code Goes Here
    },
    false
  );
}

if (location.pathname.split("/").slice(-1)[0] == "todays-offer.html") {
  $.ajax({
    type: "GET",
    url: "./assets/content.json",
    async: true,
    dataType: "json",
    success: function (result) {
      $.each(result, function (index, val) {
        for (var i = 0; i < val.length; i++) {
          loading.classList.add("d-none");
          detail.classList.remove("d-none");
          var item = val[i];
          if (item.offer == 1) {
            detailImage.src = item.image;
            detailTitle.textContent = item.name;
            detailText.textContent = item.detail;
            detailPrice.textContent = item.price;
            detailType.textContent = item.type;
          }
        }
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      loading.classList.add("d-none");
      detail.classList.remove("d-none");
      detail.innerHTML =
        "<div class='text-center'>" +
        "خطایی رخ داده است!" +
        "<br>" +
        "لطفا اینترنت خود را چک کنید." +
        "</div>";
    },
  });
}

pizzas.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      pizzas[1].classList.add("bg-success");
      getData("پیتزا");
    },
    false
  );
});

bergers.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      bergers[1].classList.add("bg-success");
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

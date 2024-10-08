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
const appetizer = document.querySelectorAll("#appetizer, #appetizer-sub");
const burgers = document.querySelectorAll("#burgers, #burgers-sub");
const pasta = document.querySelectorAll("#pasta, #pasta-sub");
const mainmeal = document.querySelectorAll("#mainmeal, #mainmeal-sub");
const specialmeal = document.querySelectorAll("#specialmeal, #specialmeal-sub");

const smooties = document.querySelectorAll("#smooties, #smooties-sub");
const dripcoffees = document.querySelectorAll("#dripcoffees, #dripcoffees-sub");
const hotdrinks = document.querySelectorAll("#hotdrinks, #hotdrinks-sub");
const coffees = document.querySelectorAll("#coffees, #coffees-sub");
const tees = document.querySelectorAll("#tees, #tees-sub");
const mocktels = document.querySelectorAll("#mocktels, #mocktels-sub");
const shakes = document.querySelectorAll("#shakes, #shakes-sub");
const cakes = document.querySelectorAll("#cakes, #cakes-sub");
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
const loadingScreen = document.getElementById("loadingScreen");
const main = document.getElementById("main");

window.addEventListener("load", function () {
  loadingScreen.classList.add("d-none");
  main.style.display = "";
});

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
  var offerExist = 0;
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
            offerExist = 1;
            detailImage.href = item.image;
            detailImage.onerror = function () {
              detailImage.href = "./assets/notfound.jpg";
            };
            var isnumb = "";
            if (/\d/.test(item.price)) {
              isnumb = " تومان";
            }
            detailTitle.textContent = item.name;
            detailText.textContent = item.detail;
            detailPrice.textContent = item.price + isnumb;
            detailType.textContent = "دسته : " + item.type;
          }
        }
      });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      loading.classList.add("d-none");
      detail.classList.remove("d-none");
      detail.innerHTML =
        "<div class='text-center py-3'>" +
        "خطایی رخ داده است!" +
        "<br>" +
        "لطفا اینترنت خود را چک کنید." +
        "</div>";
    },
    complete: function () {
      if (offerExist == 0) {
        detail.innerHTML =
          "<div class='text-center py-3'>" +
          "فعلا غذایی به غذای پیشنهادی امروز اضافه نشده" +
          "</div>";
      }
    },
  });
}

if (location.pathname.split("/").slice(-1)[0] == "breakfast-menu.html") {
  getData("صبحانه");
}

appetizer.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      appetizer[1].classList.add("bg-success");
      getData("پیش غذا");
    },
    false
  );
});

burgers.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      burgers[1].classList.add("bg-success");
      getData("برگر");
    },
    false
  );
});

pasta.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      pasta[1].classList.add("bg-success");
      getData("پاستا");
    },
    false
  );
});

mainmeal.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      mainmeal[1].classList.add("bg-success");
      getData("غذای اصلی");
    },
    false
  );
});

specialmeal.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      specialmeal[1].classList.add("bg-success");
      getData("غذای مخصوص");
    },
    false
  );
});

smooties.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      smooties[1].classList.add("bg-success");
      getData("اسموتی");
    },
    false
  );
});

coffees.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      coffees[1].classList.add("bg-success");
      getData("قهوه");
    },
    false
  );
});

hotdrinks.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      hotdrinks[1].classList.add("bg-success");
      getData("نوشیدنی گرم");
    },
    false
  );
});

dripcoffees.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      dripcoffees[1].classList.add("bg-success");
      getData("قهوه دمی");
    },
    false
  );
});

tees.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      tees[1].classList.add("bg-success");
      getData("چای");
    },
    false
  );
});

mocktels.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      mocktels[1].classList.add("bg-success");
      getData("ماکتل");
    },
    false
  );
});

shakes.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      shakes[1].classList.add("bg-success");
      getData("شیک");
    },
    false
  );
});

cakes.forEach((ele) => {
  ele.addEventListener(
    "click",
    function () {
      sbMenu.forEach((ele) => {
        ele.classList.remove("bg-success");
      });
      cakes[1].classList.add("bg-success");
      getData("کیک و دسر");
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
      if (itemsContainer != null && subContainer != null) {
        itemsContainer.classList.remove("d-none");
        subContainer.style.display = "none";
      }
      loading.classList.remove("d-none");
    },
    dataType: "json",
    success: function (result) {
      $.each(result, function (index, val) {
        for (var i = 0; i < val.length; i++) {
          loading.classList.add("d-none");
          var item = val[i];
          if (item.type == sort) {
            var isnumb = "";
            if (/\d/.test(item.price)) {
              isnumb = " تومان";
            }
            items.innerHTML +=
              "<div role='button' class='my-card card mb-3' onclick='menu.classList.add(\"d-none\"); detail.classList.remove(\"d-none\"); detailImage.src = this.childNodes[0].childNodes[0].href; detailTitle.textContent = this.childNodes[1].childNodes[0].textContent; detailText.textContent = this.childNodes[1].childNodes[1].textContent; detailPrice.textContent = this.childNodes[1].childNodes[2].childNodes[1].textContent; detailType.textContent = this.childNodes[1].childNodes[2].childNodes[0].textContent;'>" +
              '<div class="imagecontainer card-img-top">' +
              '<a href="' +
              item.image +
              '" class="progressive replace">' +
              '<img src="./assets/notfound.jpg" draggable="false" class="preview" loading="lazy" onerror="this.onerror=null; this.src=\'./assets/notfound.jpg\'" /></a>' +
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
              isnumb +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";
          }
        }
      });
      window.scrollTo(0, 0);
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

if ($("a[data-enlargeable]") != null) {
  $("a[data-enlargeable]")
    .addClass("img-enlargeable")
    .click(function () {
      var src = $(this).attr("href");
      var modal;

      function removeModal() {
        modal.remove();
        $("body").off("keyup.modal-close");
      }
      modal = $(
        "<div> <span type='button' class='material-symbols-rounded p-3 fs-1'>close</span>"
      )
        .css({
          background: "RGBA(0,0,0,.8) url(" + src + ") no-repeat center",
          backgroundSize: "contain",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "10000",
          top: "0",
          left: "0",
          cursor: "zoom-out",
        })
        .click(function () {
          removeModal();
        })
        .appendTo("body");
      $("body").on("keyup.modal-close", function (e) {
        if (e.key === "Escape") {
          removeModal();
        }
      });
    });
}

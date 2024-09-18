window.addEventListener &&
  window.addEventListener(
    "load",
    function () {
      "use strict";
      var e = document.body;
      if (
        e.getElementsByClassName &&
        e.querySelector &&
        e.classList &&
        e.getBoundingClientRect
      ) {
        var t,
          n = "replace",
          i = "preview",
          r = "reveal",
          s = document.getElementsByClassName("progressive replace"),
          o =
            window.requestAnimationFrame ||
            function (e) {
              e();
            };
        ["pageshow", "scroll", "resize"].forEach(function (e) {
          window.addEventListener(e, a, { passive: !0 });
        }),
          window.MutationObserver &&
            new MutationObserver(a).observe(e, {
              subtree: !0,
              childList: !0,
              attributes: !0,
            }),
          c();
      }
      function a() {
        t =
          t ||
          setTimeout(function () {
            (t = null), c();
          }, 300);
      }
      function c() {
        s.length &&
          o(function () {
            for (var e, t, n = window.innerHeight, i = 0; i < s.length; )
              0 < (t = (e = s[i].getBoundingClientRect()).top) + e.height &&
              n > t
                ? l(s[i])
                : i++;
          });
      }
      function l(e, t) {
        e.classList.remove(n);
        var s = e.getAttribute("data-href") || e.href,
          a = e.querySelector("img.preview");
        if (s && a) {
          var c = new Image(),
            u = e.dataset;
          u &&
            (u.srcset && (c.srcset = u.srcset), u.sizes && (c.sizes = u.sizes)),
            (c.onload = function () {
              s === e.href &&
                e.addEventListener("click", function (e) {
                  e.preventDefault();
                });
              var t = c.classList;
              (c.className = a.className),
                t.remove(i),
                t.add(r),
                (c.alt = a.alt || ""),
                (c.onload = 0),
                (c.onerror = 0),
                o(function () {
                  e.insertBefore(c, a.nextSibling).addEventListener(
                    "animationend",
                    function () {
                      e.removeChild(a), t.remove(r);
                    }
                  );
                });
            }),
            (t = 1 + (t || 0)) < 3 &&
              (c.onerror = function () {
                c.src = "./assets/notfound.jpg";
                setTimeout(function () {
                  l(e, t);
                }, 3e3 * t);
              }),
            (c.src = s);
        }
      }
    },
    !1
  );

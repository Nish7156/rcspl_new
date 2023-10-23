(function ($) {
  "use strict";

  $.fn.portfolio_more = function (options) {
    var $object = $(this).find(".isotope"),
      count = options.items.length,
      load_count = options.load_count,
      template = options.template,
      $newEls = "",
      loaded_object = "";

    $(this)
      .find(".view-more")
      .on("click", function () {
        $newEls = "";
        loaded_object = "";

        var loaded = $object.find(".added").size(),
          remain = "",
          start = "";

        remain = count - loaded > load_count ? load_count : count - loaded;

        if (loaded + remain == count)
          $(this).fadeOut(200, function () {
            $(this).addClass("not-visible");
          });

        start = loaded < 1 ? 1 : loaded + 1;

        if (remain > 0) {
          for (var i = start - 1; i < start + remain - 1; i++) {
            if (template == "masonry")
              loaded_object =
                loaded_object +
                '<div class="isotope-item added ' +
                options.items[i].columnclass +
                " " +
                options.items[i].category +
                '""><div class="portfolio-box-circle masonry"><div class="image"><a href="' +
                options.items[i].url +
                '"><img src="' +
                options.items[i].src +
                '" alt="portfolio box"></a></div><h6 class="title"><a href="' +
                options.items[i].url +
                '">' +
                options.items[i].title +
                '</a></h6><ul class="categories clean-list">' +
                options.items[i].itemcategory +
                "</ul></div></div>";
            else if (template == "circle")
              loaded_object =
                loaded_object +
                '<div class="isotope-item added ' +
                options.items[i].columnclass +
                " " +
                options.items[i].category +
                '""><div class="portfolio-box-circle"><div class="image"><a href="' +
                options.items[i].url +
                '"><img src="' +
                options.items[i].src +
                '" alt="portfolio box"></a></div><h6 class="title"><a href="' +
                options.items[i].url +
                '">' +
                options.items[i].title +
                '</a></h6><ul class="categories clean-list">' +
                options.items[i].itemcategory +
                "</ul></div></div>";
            else
              loaded_object =
                loaded_object +
                '<div class="isotope-item added ' +
                options.items[i].columnclass +
                " " +
                options.items[i].category +
                '"><div class="portfolio-box hover"><div class="cover"><a href="' +
                options.items[i].url +
                '"><img src="' +
                options.items[i].src +
                '" alt="recent project"></a><h6 class="title">' +
                options.items[i].title +
                '</h6><ul class="categories clean-list">' +
                options.items[i].itemcategory +
                "</ul></div></div>";
          }

          $newEls = $(loaded_object);
          $object.isotope("insert", $newEls, function () {
            $object.isotope("reLayout");
          });
        }
        return false;
      });
  };

  $.fn.hasAttr = function (t) {
    var e = this;
    return void 0 !== e.attr(t) ? !0 : !1;
  };

  var bricks = {
    statisticsCounterVisible: false,
    progressCounter: false,

    init: function () {
      this.slidersInit();
      this.instagramFeed();
      this.checkVisible();
      this.smallToggles();
      this.statsCounter();
      this.isotopeInit();
      this.magnificInit();
      this.countdownInit();
      this.noUiInit();
    },

    slidersInit: function () {
      $(".fullscreen_slider").revolution({
        sliderType: $(".fullscreen_slider").attr("data-type")
          ? $(".fullscreen_slider").data("type")
          : "standart",
        sliderLayout: "fullscreen",
        delay: 6000,
        fullScreenOffsetContainer: $(".rev_slider").attr("data-offset")
          ? $(".rev_slider").data("offset")
          : "",
        navigation: {
          arrows: {
            style: "white-arrows",
            enable: $(".fullscreen_slider").attr("data-arrows")
              ? $(".fullscreen_slider").data("arrows")
              : true,
            hide_onleave: false,
          },

          bullets: {
            enable: $(".fullscreen_slider").attr("data-arrows")
              ? $(".fullscreen_slider").data("bullets")
              : false,
            style: "side-bullets",
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "vertical",
            space: 0,
            tmp: '<span class="nav-bullet"></span>',
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
          },
        },
        forceFullWidth: "off",
        fullWidth: "off",
        disableProgressBar: "on",
        gridwidth: 1200,
        gridheight: 960,
        parallax: {
          type: "mouse",
          origo: "slidercenter",
          speed: 2000,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 25, 47, 48, 49, 50, 51, 55],
        },
      });

      $(".fullwidth_slider").revolution({
        sliderType: $(".fullwidth_slider").attr("data-type")
          ? $(".fullwidth_slider").data("type")
          : "standart",
        sliderLayout: "fullwidth",
        delay: 9000,
        navigation: {
          arrows: {
            style: "white-arrows",
            enable: $(".fullwidth_slider").attr("data-arrows")
              ? $(".fullwidth_slider").data("arrows")
              : true,
            hide_onmobile: true,
          },
        },
        gridwidth: $(".fullwidth_slider").attr("data-width")
          ? $(".fullwidth_slider").data("width")
          : 1920,
        gridheight: $(".fullwidth_slider").attr("data-height")
          ? $(".fullwidth_slider").data("height")
          : 860,
        disableProgressBar: "on",
      });

      var i = $(".slick-carousel");

      i.each(function () {
        var e = $(this),
          a = e.find(".carousel-items");
        a.slick({
          focusOnSelect: !0,
          speed: e.hasAttr("data-speed") ? e.data("speed") : 600,
          slidesToShow: e.hasAttr("data-items-desktop")
            ? e.data("items-desktop")
            : 4,
          arrows: e.hasAttr("data-arrows") ? e.data("arrows") : !0,
          appendArrows: e,
          dots: e.hasAttr("data-dots") ? e.data("dots") : !0,
          infinite: e.hasAttr("data-infinite") ? e.data("infinite") : !1,
          slidesToScroll: e.hasAttr("data-items-to-slide")
            ? e.data("items-to-slide")
            : 1,
          initialSlide: e.hasAttr("data-start") ? e.data("start") : 0,
          asNavFor: e.hasAttr("data-as-nav-for") ? e.data("as-nav-for") : "",
          centerMode: e.hasAttr("data-center-mode")
            ? e.data("center-mode")
            : "",
          fade: e.hasAttr("data-fade") ? e.data("fade") : false,
          easing: e.hasAttr("data-easing") ? e.data("easing") : "linear",
          responsive: [
            {
              breakpoint: e.hasAttr("data-breakpoint")
                ? e.data("breakpoint")
                : 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },

            {
              breakpoint: e.hasAttr("data-breakpoint")
                ? e.data("breakpoint")
                : 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
    },

    instagramFeed: function () {
      function themeInstagram(container, data) {
        var pattern, renderTemplate, url;
        url = "https://api.instagram.com/v1";
        pattern = function (obj) {
          var item, k, len, template;
          if (obj.length) {
            template = "";
            for (k = 0, len = obj.length; k < len; k++) {
              item = obj[k];
              template +=
                "<li><a href='" +
                item.link +
                "' title='" +
                item.title +
                "' target='_blank'><img src='" +
                item.image +
                "' alt='" +
                item.title +
                "'></a></li>";
            }

            return container.append(template);
          }
        };

        if (container.data("instagram-username")) {
          url +=
            "/users/search?q=" +
            container.data("instagram-username") +
            "&client_id=" +
            data.clientID +
            "&callback=?";
          renderTemplate = this._template;

          $.ajax({
            dataType: "jsonp",
            url: url,
            data: data,
            success: function (response) {
              var urlUser;
              if (response.data.length) {
                urlUser =
                  "https://api.instagram.com/v1/users/" +
                  response.data[0].id +
                  "/media/recent/?client_id=" +
                  data.clientID +
                  "&count=" +
                  data.count +
                  "&size=l&callback=?";
                return $.ajax({
                  dataType: "jsonp",
                  url: urlUser,
                  data: data,
                  success: function (response) {
                    var instagramFeed;
                    if (response.data.length) {
                      instagramFeed = {};
                      instagramFeed.data = renderTemplate(response);
                      instagramFeed.timestamp = new Date().getTime();
                      return pattern(instagramFeed.data);
                    }
                  },
                });
              }
            },
          });
        }
      }

      themeInstagram.prototype._template = function (obj) {
        var item, k, len, ref, results;
        if (obj.data) {
          ref = obj.data;
          results = [];
          for (k = 0, len = ref.length; k < len; k++) {
            item = ref[k];
            results.push({
              title: item.user.username,
              link: item.link,
              image: item.images.low_resolution.url,
            });
          }
          return results;
        }
      };

      if ($("[data-instagram]").length) {
        var iContainer = $("[data-instagram]");
        iContainer.each(function () {
          var whiteInstagram = new themeInstagram($(this), {
            clientID: "c5dfe123bbdc4f469edfd95f975dde90",
            count: $(this).data("instagram") || 6,
          });
        });
      }
    },

    checkVisible: function () {
      var $w = $(window);
      $.fn.visible = function (partial, hidden, direction) {
        if (this.length < 1) return;

        var $t = this.length > 1 ? this.eq(0) : this,
          t = $t.get(0),
          vpWidth = $w.width(),
          vpHeight = $w.height(),
          direction = direction ? direction : "both",
          clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === "function") {
          var rec = t.getBoundingClientRect(),
            tViz = rec.top >= 0 && rec.top < vpHeight,
            bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
            lViz = rec.left >= 0 && rec.left < vpWidth,
            rViz = rec.right > 0 && rec.right <= vpWidth,
            vVisible = partial ? tViz || bViz : tViz && bViz,
            hVisible = partial ? lViz || rViz : lViz && rViz;

          if (direction === "both") return clientSize && vVisible && hVisible;
          else if (direction === "vertical") return clientSize && vVisible;
          else if (direction === "horizontal") return clientSize && hVisible;
        } else {
          var viewTop = $w.scrollTop(),
            viewBottom = viewTop + vpHeight,
            viewLeft = $w.scrollLeft(),
            viewRight = viewLeft + vpWidth,
            offset = $t.offset(),
            _top = offset.top,
            _bottom = _top + $t.height(),
            _left = offset.left,
            _right = _left + $t.width(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom,
            compareLeft = partial === true ? _right : _left,
            compareRight = partial === true ? _left : _right;

          if (direction === "both")
            return (
              !!clientSize &&
              compareBottom <= viewBottom &&
              compareTop >= viewTop &&
              compareRight <= viewRight &&
              compareLeft >= viewLeft
            );
          else if (direction === "vertical")
            return (
              !!clientSize &&
              compareBottom <= viewBottom &&
              compareTop >= viewTop
            );
          else if (direction === "horizontal")
            return (
              !!clientSize &&
              compareRight <= viewRight &&
              compareLeft >= viewLeft
            );
        }
      };
    },

    smallToggles: function () {
      $(".mobile-navigation-toggle").on("click", function () {
        // $(".top-menu").toggleClass("top-animate");
        // $(".mid-menu").toggleClass("mid-animate");
        // $(".bottom-menu").toggleClass("bottom-animate");
        $("header .main-nav").toggleClass("visible");
        $("html").toggleClass("header-mobile-view");
      });

      $(".main-nav").on("click", function (e) {
        var target = $(event.target);

        if (target.is(".main-nav.visible"))
          $(".mobile-navigation-toggle").click();
      });

      $(".share-box .box-toggle").on("click", function () {
        $(this).parent(".share-box").toggleClass("open");
      });

      $(".main-nav .menu-item a").on("click", function () {
        $(this).parent().toggleClass("showsub");
      });

      $(window).on("scroll", function () {
        $(this).scrollTop() > 10
          ? $("header").addClass("fixed")
          : $("header").removeClass("fixed");

        var macBookShowCaseContainer = $(".showcase-image-wrapper");

        if (macBookShowCaseContainer.length) {
          var showCaseContent =
            macBookShowCaseContainer.find(".inner-content img");

          if ($(macBookShowCaseContainer).visible(true)) {
            var translateValue =
              $(window).scrollTop() -
              macBookShowCaseContainer.offset().top +
              $(window).height();

            showCaseContent.css({
              transform: "translateY(" + -translateValue + "px)",
            });
          }
        }
      });

      $(".cart-items .cart")
        .find(".cart-item")
        .each(function () {
          var obj = jQuery(this);

          obj.find(".remove-from-cart").on("click", function (e) {
            e.preventDefault();
            if ($(".cart-items .cart ul li").length == 1) {
              $(".cart-items .cart")
                .find("> *")
                .each(function (i, val) {
                  $(val).fadeOut(200, function () {
                    $(this).remove();
                  });
                });

              setTimeout(function () {
                $(".cart-items .cart").append(
                  '<p class="empty">No items in cart</p>'
                );
                $(".cart-btn").find(".cart-btn-price").text("0.00");
                $(".cart-btn").find(".cart-btn-count").text("0");
              }, 300);
            }
            obj.fadeOut(200, function () {
              $(this).remove();
            });
          });
        });

      $(".search-trigger .icon").on("click", function () {
        var parent = $(this).parents(".actions");
        parent.toggleClass("open");

        setTimeout(function () {
          parent.find(".search-form .search-input").focus();
        }, 300);

        if (parent.hasClass("open")) {
          $(this).removeClass("fa-search").addClass("fa-close");
        } else {
          $(this).removeClass("fa-close").addClass("fa-search");
        }
      });

      jQuery("html, body").on("click", function (e) {
        if (!$(e.target).hasClass("dismiss")) {
          $(".search-trigger").removeClass("open");
          $(".search-trigger .icon")
            .removeClass("fa-close")
            .addClass("fa-search");

          $(".select-options").removeClass("open");
        }
      });

      var customSelect = $(".custom-select");

      customSelect.on("click", function (e) {
        e.stopPropagation();

        var selector = $(this);
        selector.find(".select-options").toggleClass("open");

        selector.find(".select-options li").on("click", function (e) {
          selector.find(".content").html($(this).html());
        });
      });

      $(".check-value").on("focusout", function () {
        var text_val = $(this).val();
        if (text_val === "" || text_val.replace(/^\s+|\s+$/g, "") === "") {
          $(this).removeClass("has-value");
        } else {
          $(this).addClass("has-value");
        }
      });

      var accordion_more = jQuery(".accordion-group");

      accordion_more.each(function (i, val) {
        var accordion = jQuery(val).find(".accordion");

        accordion.each(function (i, val) {
          var heading = jQuery(val).find(".heading"),
            body = jQuery(val).find(".body"),
            current = i;

          heading.on("click", function () {
            if (heading.hasClass("open")) {
              body.slideUp(300);
            } else {
              accordion.find(".heading").removeClass("open");
              accordion.find(".body").slideUp(300);
              body.slideDown(300);
            }

            setTimeout(function () {
              jQuery(heading).toggleClass("open");
            }, 200);
          });
        });
      });

      var tabbed = $(".tabbed-content");

      tabbed.each(function (i, val) {
        $(this)
          .find(".tabs li")
          .on("click", function () {
            var tab_id = $(this).attr("data-tab");

            $(val).find(".tabs li").removeClass("current");
            $(val).find(".tab-content").fadeOut(0).removeClass("current");

            $(this).fadeIn(800).addClass("current");
            $(val)
              .find("#" + tab_id)
              .fadeIn(800)
              .addClass("current");
          });
      });

      $(".hero-section .scroll").on("click", function () {
        var index = $(this).closest(".hero-section").index();
        $("body").animate(
          {
            scrollTop: $(".content-wrapper")
              .find("section")
              .eq(index + 1)
              .offset().top,
          },
          900
        );
      });

      function initialize() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
          center: new google.maps.LatLng(38.954771, -84.275544),
          zoom: 16,
          scrollwheel: false,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{ stylers: [{ saturation: -100 }] }],
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
      }

      if (jQuery("#map").length) {
        google.maps.event.addDomListener(window, "load", initialize);
      }
    },

    statsCounter: function () {
      $(document).scroll(function () {
        if (
          $(".stats-item").visible(true) &&
          !bricks.statisticsCounterVisible
        ) {
          bricks.statisticsCounterVisible = true;
          $(".stats-item .number").each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate(
              { Counter: parseInt($this.html(), 10) },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $this.text(Math.ceil(now));
                },
              }
            );
          });
        }

        if ($(".progress-item").visible(true) && !bricks.progressCounter) {
          bricks.progressCounter = true;
          $(".progress-item .number").each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate(
              { Counter: parseInt($this.html(), 10) },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $this.text(Math.ceil(now));
                  $this
                    .parent(".heading")
                    .parent(".progress-bar")
                    .width(Math.ceil(now) + "%");
                },
              }
            );
          });
        }
      });
    },

    isotopeInit: function () {
      var sidebarWrapper = $(".sidebar .isotope"),
        footerWrapper = $(".top-footer .isotope"),
        isotopeContainer = $(".isot-projects-wrapper .isotope"),
        defaultSelection = $(".isot-projects-wrapper").attr(
          "data-default-selection"
        );

      isotopeContainer.imagesLoaded(function () {
        isotopeContainer.isotope({
          filter: defaultSelection,
          itemSelector: ".isotope-item",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)",
          },
          transitionDuration: "0.8s",
        });
      });

      $(".isot-filters a").on("click", function () {
        $(".isot-filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        isotopeContainer.isotope({
          filter: selector,
        });
        return false;
      });

      var isotopeGallery = $(".gallery-wrapper .isotope");

      isotopeGallery.imagesLoaded(function () {
        isotopeGallery.isotope({
          itemSelector: ".isotope-item",
        });
      });

      setTimeout(function () {
        sidebarWrapper.imagesLoaded(function () {
          sidebarWrapper.isotope({
            itemSelector: ".isotope-item",
          });
        });

        footerWrapper.imagesLoaded(function () {
          footerWrapper.isotope({
            itemSelector: ".isotope-item",
          });
        });
      }, 2000);
    },

    magnificInit: function () {
      var zoomLink = $(".photozoom");
      var videoLink = $(".video-link");

      if (zoomLink.length) {
        if (zoomLink.parents(".gallery-wrapper").length) {
          $(".gallery-wrapper").each(function () {
            $(this).magnificPopup({
              delegate: "a",
              type: "image",
              gallery: {
                enabled: true,
              },
              iframe: {
                markup:
                  '<div class="mfp-iframe-scaler">' +
                  '<div class="mfp-close"></div>' +
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                  '<div class="mfp-counter"></div>' +
                  "</div>",
              },
            });
          });
        } else {
          zoomLink.magnificPopup({ type: "image" });
        }
      }

      if (videoLink.length) {
        videoLink.magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      }
    },

    countdownInit: function () {
      var instances = [],
        matchers = [],
        defaultOptions = {
          precision: 100,
          elapse: false,
        };
      matchers.push(/^[0-9]*$/.source);
      matchers.push(
        /([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
      );
      matchers.push(
        /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
      );
      matchers = new RegExp(matchers.join("|"));
      function parseDateString(dateString) {
        if (dateString instanceof Date) {
          return dateString;
        }
        if (String(dateString).match(matchers)) {
          if (String(dateString).match(/^[0-9]*$/)) {
            dateString = Number(dateString);
          }
          if (String(dateString).match(/\-/)) {
            dateString = String(dateString).replace(/\-/g, "/");
          }
          return new Date(dateString);
        } else {
          throw new Error(
            "Couldn't cast `" + dateString + "` to a date object."
          );
        }
      }
      var DIRECTIVE_KEY_MAP = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        w: "weeks",
        d: "daysToWeek",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds",
      };
      function escapedRegExp(str) {
        var sanitize = str.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(sanitize);
      }
      function strftime(offsetObject) {
        return function (format) {
          var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
          if (directives) {
            for (var i = 0, len = directives.length; i < len; ++i) {
              var directive = directives[i].match(
                  /%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/
                ),
                regexp = escapedRegExp(directive[0]),
                modifier = directive[1] || "",
                plural = directive[3] || "",
                value = null;
              directive = directive[2];
              if (DIRECTIVE_KEY_MAP.hasOwnProperty(directive)) {
                value = DIRECTIVE_KEY_MAP[directive];
                value = Number(offsetObject[value]);
              }
              if (value !== null) {
                if (modifier === "!") {
                  value = pluralize(plural, value);
                }
                if (modifier === "") {
                  if (value < 10) {
                    value = "0" + value.toString();
                  }
                }
                format = format.replace(regexp, value.toString());
              }
            }
          }
          format = format.replace(/%%/, "%");
          return format;
        };
      }
      function pluralize(format, count) {
        var plural = "s",
          singular = "";
        if (format) {
          format = format.replace(/(:|;|\s)/gi, "").split(/\,/);
          if (format.length === 1) {
            plural = format[0];
          } else {
            singular = format[0];
            plural = format[1];
          }
        }
        if (Math.abs(count) === 1) {
          return singular;
        } else {
          return plural;
        }
      }
      var Countdown = function (el, finalDate, options) {
        this.el = el;
        this.$el = $(el);
        this.interval = null;
        this.offset = {};
        this.options = $.extend({}, defaultOptions);
        this.instanceNumber = instances.length;
        instances.push(this);
        this.$el.data("countdown-instance", this.instanceNumber);
        if (options) {
          if (typeof options === "function") {
            this.$el.on("update.countdown", options);
            this.$el.on("stoped.countdown", options);
            this.$el.on("finish.countdown", options);
          } else {
            this.options = $.extend({}, defaultOptions, options);
          }
        }
        this.setFinalDate(finalDate);
        this.start();
      };
      $.extend(Countdown.prototype, {
        start: function () {
          if (this.interval !== null) {
            clearInterval(this.interval);
          }
          var self = this;
          this.update();
          this.interval = setInterval(function () {
            self.update.call(self);
          }, this.options.precision);
        },
        stop: function () {
          clearInterval(this.interval);
          this.interval = null;
          this.dispatchEvent("stoped");
        },
        toggle: function () {
          if (this.interval) {
            this.stop();
          } else {
            this.start();
          }
        },
        pause: function () {
          this.stop();
        },
        resume: function () {
          this.start();
        },
        remove: function () {
          this.stop.call(this);
          instances[this.instanceNumber] = null;
          delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (value) {
          this.finalDate = parseDateString(value);
        },
        update: function () {
          if (this.$el.closest("html").length === 0) {
            this.remove();
            return;
          }
          var hasEventsAttached = $._data(this.el, "events") !== undefined,
            now = new Date(),
            newTotalSecsLeft;
          newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
          newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
          newTotalSecsLeft =
            !this.options.elapse && newTotalSecsLeft < 0
              ? 0
              : Math.abs(newTotalSecsLeft);
          if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
            return;
          } else {
            this.totalSecsLeft = newTotalSecsLeft;
          }
          this.elapsed = now >= this.finalDate;
          this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(
              (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
            ),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - now.getFullYear()),
          };
          if (!this.options.elapse && this.totalSecsLeft === 0) {
            this.stop();
            this.dispatchEvent("finish");
          } else {
            this.dispatchEvent("update");
          }
        },
        dispatchEvent: function (eventName) {
          var event = $.Event(eventName + ".countdown");
          event.finalDate = this.finalDate;
          event.elapsed = this.elapsed;
          event.offset = $.extend({}, this.offset);
          event.strftime = strftime(this.offset);
          this.$el.trigger(event);
        },
      });
      $.fn.countdown = function () {
        var argumentsArray = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
          var instanceNumber = $(this).data("countdown-instance");
          if (instanceNumber !== undefined) {
            var instance = instances[instanceNumber],
              method = argumentsArray[0];
            if (Countdown.prototype.hasOwnProperty(method)) {
              instance[method].apply(instance, argumentsArray.slice(1));
            } else if (String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i) === null) {
              instance.setFinalDate.call(instance, method);
              instance.start();
            } else {
              $.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  method
                )
              );
            }
          } else {
            new Countdown(this, argumentsArray[0], argumentsArray[1]);
          }
        });
      };

      $(".the-countdown").each(function () {
        var cd_duedate = $(this).data("duedate");

        $(this).countdown(cd_duedate, function (event) {
          $(this).find("[data-days]").html(event.strftime("%D"));
          $(this).find("[data-hours]").html(event.strftime("%H"));
          $(this).find("[data-minutes]").html(event.strftime("%M"));
          $(this).find("[data-seconds]").html(event.strftime("%S"));
        });
      });
    },

    noUiInit: function () {
      var priceSlider = $(".widget_pricefilter .price-slider .slider")[0],
        step = $(priceSlider).data("step"),
        start = $(priceSlider).data("start"),
        stop = $(priceSlider).data("stop"),
        min = $(priceSlider).data("min"),
        max = $(priceSlider).data("max");

      function setPosition() {
        var valuesContainer = $(".price-slider .values-wrapper"),
          containerOffset = $(".price-slider").offset().left,
          lowerOffset = $(".noUi-handle-lower").offset().left - containerOffset,
          upperOffset = $(".noUi-handle-upper").offset().left - containerOffset;
      }

      if ($(".widget_pricefilter .price-slider").length) {
        noUiSlider.create(priceSlider, {
          start: [start, stop],
          connect: true,
          step: step,
          range: {
            min: min,
            max: max,
          },
        });
        setTimeout(function () {
          setPosition();
        }, 100);

        var snapValues = [
          document.getElementsByClassName("slider-snap-value-lower")[0],
          document.getElementsByClassName("slider-snap-value-upper")[0],
        ];

        priceSlider.noUiSlider.on("update", function (values, handle) {
          if (handle == 0) {
            $(".slider-snap-value-lower").html(parseFloat(values[handle]));
          } else {
            $(".slider-snap-value-upper").html(parseFloat(values[handle]));
          }
          setPosition();
        });
      }
    },
  };

  $(document).ready(function () {
    bricks.init();

    $("body").imagesLoaded(function () {
      setTimeout(function () {
        jQuery("body").addClass("dom-ready");
      }, 200);
    });

    // Contact form
    if (jQuery(".contact_form").size() > 0) {
      jQuery("#ajax-contact-form").on("submit", function () {
        var str = $(this).serialize();
        var result = "";
        $.ajax({
          type: "POST",
          url: "contact_form/contact_process.php",
          data: str,
          success: function (msg) {
            // Message Sent - Show the 'Thank You' message and hide the form
            if (msg == "OK") {
              result =
                '<div class="notification_ok">Your message has been sent. Thank you!</div>';
              jQuery("#fields").hide();
            } else {
              result = msg;
            }
            jQuery("#note").html(result);
          },
        });
        return false;
      });
    }
  });
})(jQuery);

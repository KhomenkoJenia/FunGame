window.addEventListener("load", function () {
	document.getElementById("preloader").style.display = "none";
});

$(document).ready(function () {
	// hide #back-top first
	$("#scroll-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$("#scroll-top").fadeIn();
			} else {
				$("#scroll-top").fadeOut();
			}
		});
		// scroll body to 0px on click
		$("#scroll-top button").click(function () {
			$("body,html").animate(
				{
					scrollTop: 0,
				},
				800
			);
		});
	});
});

function closePopup() {
	document.getElementById("popupOverlay").style.display = "none";
}

function confirmLogin() {
	const toggleButton = document.getElementById("toggleButton");
	const isLogin = toggleButton.textContent === "Login";

	toggleButton.textContent = isLogin ? "Logout" : "Login";
	localStorage.setItem("authState", isLogin ? "Logout" : "Login");

	closePopup();

	window.location.href = "game.html";
}

document.addEventListener("DOMContentLoaded", function () {
	function openPopup() {
		document.getElementById("popupOverlay").style.display = "flex";
	}

	const savedState = localStorage.getItem("authState");
	const toggleButton = document.getElementById("toggleButton");

	if (savedState) {
		toggleButton.textContent = savedState;
	}

	toggleButton.onclick = openPopup;

	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	const okButton = document.getElementById("okButton");

	function validateInputs() {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isEmailValid = emailPattern.test(emailInput.value.trim());
		const isPasswordValid = passwordInput.value.trim().length >= 6;

		okButton.disabled = !(isEmailValid && isPasswordValid);
	}

	emailInput.addEventListener("input", validateInputs);
	passwordInput.addEventListener("input", validateInputs);

	validateInputs();
});

document.addEventListener("DOMContentLoaded", function () {
	const cookiePopup = document.getElementById("cookiePopup");
	console.log("cookiePopup:", cookiePopup);
	if (cookiePopup && !localStorage.getItem("cookiesAccepted")) {
		cookiePopup.style.display = "flex";
	}
});

function acceptCookies() {
	console.log("Кнопка 'Принять' нажата");
	localStorage.setItem("cookiesAccepted", "true");
	const cookiePopup = document.getElementById("cookiePopup");
	if (cookiePopup) {
		cookiePopup.style.display = "none";
	}
}

function declineCookies() {
	const cookiePopup = document.getElementById("cookiePopup");
	if (cookiePopup) {
		cookiePopup.style.display = "none";
	}
}

console.log(
	"Состояние localStorage после нажатия:",
	localStorage.getItem("cookiesAccepted")
);

const elementSection = document.querySelectorAll("section");
const containerFluid = document.querySelectorAll(".container-fluid");

const animatedElements = document.querySelectorAll(".template-title");

window.addEventListener("scroll", () => {
	animatedElements.forEach((element) => {
		const elementPosition = element.getBoundingClientRect();
		const elementTop = elementPosition.top;
		const elementBottom = elementPosition.bottom;
		const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

		if (isVisible) {
			element.classList.add("animate__animated", "animate__fadeInUp");
			element.style.setProperty("--animate-duration", "1s");
		}
	});
});
const animatedElementsLeft = document.querySelectorAll(".template-title-left");

window.addEventListener("scroll", () => {
	animatedElementsLeft.forEach((element) => {
		const elementPosition = element.getBoundingClientRect();
		const elementTop = elementPosition.top;
		const elementBottom = elementPosition.bottom;
		const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

		if (isVisible) {
			element.classList.add("animate__animated", "animate__fadeInLeft");
			element.style.setProperty("--animate-duration", "1s");
		}
	});
});

const containerMobile = () => {
	containerFluid.forEach((item) => {
		const sectionHasFluid = item.closest("section");
		if (!sectionHasFluid.classList.contains("first-screen")) {
			sectionHasFluid.closest("section").style.padding = "0 50px";
		}
	});
};

const containerDesktop = () => {
	containerFluid.forEach((item) => {
		const sectionHasFluid = item.closest("section");
		if (!sectionHasFluid.classList.contains("first-screen")) {
			sectionHasFluid.closest("section").style.padding = "0 0";
		}
	});
};

const adopContainer = (x) => {
	if (!x.matches) {
		containerMobile();
	} else {
		containerDesktop();
	}
};
const x = window.matchMedia("(max-width: 991px)");
x.addEventListener("change", adopContainer);
window.addEventListener("resize", () => {});
adopContainer(x);

$(document).ready(function () {
	$(".banner").slick({
		dots: true,
		arrows: true,
		appendArrows: ".banner-nav",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

mobileOnlySlider("#slider-advantage", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick",
			},
		],
	};

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
}

$(".slider-template").slick({
	dots: false,
	infinite: false,
	speed: 600,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1299,
			settings: {
				slidesToShow: 2,

				infinite: true,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
			},
		},
	],
});

const footer = document.querySelector(".footer-animate");

window.addEventListener("scroll", () => {
	if (!footer) return;
	const footerPosition = footer.getBoundingClientRect();
	const footerTop = footerPosition.top;
	const isFooterVisible = footerTop < window.innerHeight && footerTop > 0;

	if (isFooterVisible) {
		footer.classList.add("animate__animated", "animate__fadeInUp");
		footer.style.setProperty("--animate-duration", "1s");

		window.removeEventListener("scroll", arguments.callee);
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll(".go-to-game");

	if (buttons.length === 0) {
		console.log(
			"Buttons not found! Double-check the DOM structure or script loading order."
		);
	} else {
		buttons.forEach((button) => {
			button.setAttribute("type", "button");
			button.addEventListener("click", function (event) {
				event.preventDefault();

				window.location.href = "game.html";
			});
		});
	}
});

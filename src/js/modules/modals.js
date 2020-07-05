

const modals = (state) => {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll("[data-modal]"),
            scroll = calcScroll();
        trigger.forEach(triggerItem => {
            triggerItem.addEventListener("click", (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                btnPressed = true;
                if (destroy) {
                    triggerItem.remove();
                }
                windows.forEach(item => {
                    item.style.display = "none";
                    item.classList.add("animated", "fadeIn");
                });
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add("modal-open");

            });


        });
        close.addEventListener("click", () => {
            windows.forEach(item => item.style.display = "none");
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove("modal-open");
        });
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                windows.forEach(item => item.style.display = "none");
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove("modal-open");
            }

        });
    }

    function showModalByTime(modalSelector, time) {
        const modal = document.querySelector(modalSelector);
        setTimeout(() => {
            let display;
            document.querySelectorAll("[data-modal]").forEach(item => {
                if (getComputedStyle(item).display !== "none") {
                    display = "block";
                }
            });

            if (!display) {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflow = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;

    }
    function openByScroll(selector) {
        window.addEventListener("scroll", () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight + 1 >=
                scrollHeight)) {

                document.querySelector(selector).click();
            }
        });
    }

    bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
    bindModal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
    bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
    openByScroll(".fixed-gift");
    showModalByTime(".popup-consultation", 60000);
};
export default modals;
import { getData } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const button = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add("animated", "fadeInUp");
    // });

    // button.addEventListener("click", () => {
    //     cards.forEach(card => {
    //         card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
    //         card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    //     });
    //     button.remove();
    // });

    button.addEventListener("click", function() {
        getData("assets/db.json")
            .then(res => {
                console.log(res);
                createCards(res.styles);
                this.remove();
            })
            .catch(err => console.log(err));

    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement("div");
            card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
            card.innerHTML = ` <div class=styles-block>
                                    <img src= ${src} alt="style">
                                    <h4>${title}</h4>
                                    <a href=${link}>Подробнее</a>
                                </div>`;
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;

// <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//     <div class=styles-block>
//         <img src=assets /img/styles-5.jpg alt>
// 						<h4>Пастелью</h4>
//         <a href="#">Подробнее</a>
//     </div>
// </div>
//     <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//         <div class=styles-block>
//             <img src=assets /img/styles-6.jpg alt>
// 						<h4>Поп-арт</h4>
//             <a href="#">Подробнее</a>
//         </div>
//     </div>
//     <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//         <div class=styles-block>
//             <img src=assets /img/styles-7.png alt>
// 						<h4>Фотомозаика</h4>
//             <a href="#">Подробнее</a>
//         </div>
//     </div>
//     <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//         <div class=styles-block>
//             <img src=assets /img/styles-8.jpg alt>
// 						<h4>Шарж</h4>
//             <a href="#">Подробнее</a>
//         </div>
//     </div>
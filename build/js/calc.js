'use strict';
let calc = new Vue({
    el: '#calc',
    data: {
        square: 36,
        height: 6,
        material: [
            {
                name: 'річковий митий пісок (відсів)',
                priceFrom: 200,
                priceTo: 220
            },
            {
                name: 'рогатинський білий пісок',
                priceFrom: 190,
                priceTo: 210
            },
            {
                name: 'мішаний пісок',
                priceFrom: 210,
                priceTo: 230
            },
        ],
        sand: false,
        showedResult: false,
        blockedForm: false
    },
    computed: {
        price() {
            return this.currentSandPrice * this.square;
        },
        currentSand() {
            return this.sand;
        },
        currentSandPrice() {
            let currentSquare = this.square;
            let currentHeight = this.height;
            if (currentSquare > 50) {
                return this.getPriceInc(currentHeight) + this.material[this.sand].priceFrom;
            } else {
                return this.getPriceInc(currentHeight) + this.material[this.sand].priceTo;
            }
        }
    },
    methods: {
        getPriceInc(height) {
            return (height > 6) ? (height - 6) * 20 : 0;
        },
        showResult() {
            this.blockedForm = true;
            $('.calc__get, .calc__text').slideDown(300);
            scrollToAnchor();
        }
    },  
    created() {
        this.sand = 0;
    }

});
function scrollToAnchor(){
    let tag = $('.calc__get');
    $('html, body').animate({scrollTop: tag.offset().top - 200},'slow');
}

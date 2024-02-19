let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener("click", () => {

    menuContent.classList.toggle('on', show);
    show = !show;

});

var cat = [
    {
        "photo": "img/tenis gelkayano.png",
        "name": "Asics Gel-Kayano 30 Masculino",
        "size": "Tamanho: 39 - 41",
        "price1": "R$256,41",
        "price2": "R$269,90",
    },
    {
        "photo": "img/tenis olympikus.png",
        "name": "Olympikus ESTILO 2 MASCULINO",
        "size": "Tamanho: 39 - 41",
        "price1": "R$256,41",
        "price2": "R$269,90",
    },
    {
        "photo": "img/tenis nike.png",
        "name": "Nike SB Force 58 PRM Masculino",
        "size": "Tamanho: 39 - 41",
        "price1": "R$702,91",
        "price2": "R$739,90",
    },
    {
        "photo": "img/tenis adidas.png",
        "name": "Adidas Climacool Ventania",
        "size": "Tamanho: 39 - 41",
        "price1": "R$569,91",
        "price2": "R$599,90",
    },
    {
        "photo": "img/tenis new balance.png",
        "name": "New Balance 1080 v12 Feminino",
        "size": "Tamanho: 34 - 36 - 38",
        "price1": "R$1.187,41",
        "price2": "R$1.249,90",
    },
    {
        "photo": "img/tenis mizuno.png",
        "name": "Mizuno Wave Stratos Feminino",
        "size": "Tamanho: 35 - 36 - 38",
        "price1": "R$799,90",
        "price2": "R$759,91",
    },
    {
        "photo": "img/tenis nike feminino.png",
        "name": "Nike Air Max AP Feminino",
        "size": "Tamanho: 39",
        "price1": "R$799,90",
        "price2": "R$759,91",
    },
    {
        "photo": "img/tenis wilson.png",
        "name": "Wilson Ace Plus Feminino",
        "size": "Tamanho: 36 - 37",
        "price1": "R$265,91",
        "price2": "R$279,90",
    },
];

const bancodedados = {
    data() {
        return {
            cat: window.cat
        }
    }
};

Vue.createApp(bancodedados).mount('#base');

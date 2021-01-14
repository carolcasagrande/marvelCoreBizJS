$(document).ready(showHero(21))

document.getElementById("filter").addEventListener("click", filterHero);

function filterHero() {
    var qtdHero = document.getElementById("qtd-register").value;
    if(qtdHero >= 101){
        alert("Nossa equipe tem apenas 100 heróis.")
    } else {
        showHero(qtdHero);
    }
}

function showHero(qtd){
    var urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=${qtd}&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af`;
    var contentHTML = "";

    $.get(urlAPI, function(res){
        var items = res.data.results;

        items.forEach(function(hero){
            var url = hero.urls[0].url;

            contentHTML += `
                <div class="item">
                    <a href="${url}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>
            `;
        });
        $('#marvel-row').html(contentHTML);
    })
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
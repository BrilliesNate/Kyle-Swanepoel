/*  Copyright (C) Solar MD (Pty) ltd - All Rights Reserved
 * 
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential
 *  
 *  Written by Nathan Brill, 2021
 *  
 *  For more information http://www.solarmd.co.za/ 
 *  email: info@solarmd.co.za
 *  7 Alternator Ave, Montague Gardens, Cape Town, 7441 South Africa
 *  Phone: 021 555 2181
 *  
 */

// function init() {
function whatsNewCard(imageUrl, newList) {

    let newCard = document.createElement("div");
    newCard.classList.add('blog-card');
    document.body.appendChild(newCard);
    let wrapper = document.createElement('div');
    wrapper.classList.add("meta");
    newCard.appendChild(wrapper);


    if (imageUrl.includes("http")) {

        let cardImage = document.createElement("div");
        cardImage.classList.add("photo");
        wrapper.appendChild(cardImage);
        cardImage.style = "background-image:" + imageUrl
    }

    // detailsList = function (author, page) {
    let ul = document.createElement("ul");
    ul.classList.add("details")
    wrapper.appendChild(ul)


    // author = function (txt) {

    let list = document.createElement("li");
    list.classList.add("author")
    list.innerText = "SolarMD";
    ul.appendChild(list)
    // }

    let currentDate = document.createElement("li");

    let getDate = function () {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDay();
        return day + month + year;
    }

    currentDate.classList.add("date");
    currentDate.innerText = getDate();
    ul.appendChild(currentDate);

    // }

    // descriptionList = function () {
    let descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add("description");
    newCard.appendChild(descriptionDiv);

    let headerH1 = document.createElement("h1");
    headerH1.innerText = "Logger v6.410";
    descriptionDiv.appendChild(headerH1)

    let headerH2 = document.createElement("h2");
    descriptionDiv.appendChild(headerH2);
    headerH2.innerText = "Logger v6.410 release date:18.09.2019";

    let descriptList = document.createElement("ul");
    descriptionDiv.appendChild(descriptList)

    // this.descriptionList = newList;


    if (typeof newList ==="") {
        let dList = document.createElement("li");
        descriptList.appendChild(dList)
        dList.innerText = newLIst;

    }



    let readMoreBtn = document.createElement("p");
    readMoreBtn.classList.add("read-more");
    descriptionDiv.appendChild(readMoreBtn);

    let readMoreLink = document.createElement("a");
    readMoreLink.innerText = "Read More";
    readMoreLink.href = "#";
    readMoreBtn.appendChild(readMoreLink);



    // }

}
// }

// $(document).ready(function () {
//     init();
// });
whatsNewCard("url(https://www.mltpower.com/products/image/cache/catalog/Captu333re-500x500.PNG)", "Sungrow SG/PL Series Inverter Support @RS485 Interfaces.")
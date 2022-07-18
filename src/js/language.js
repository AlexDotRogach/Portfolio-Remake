import impLangObj from './language_obj';

function language() {
    const allLanguage = ["ua", "en"];
    const langWrap = document.querySelector(".swap__language");
    const hash = window.location.hash.substr(1);
    const path = window.location.pathname;
    const langObj = impLangObj.languageSetting;

    // check a mistake in path 
    if (!allLanguage.includes(hash)) {
        location.href = path + "#ua";
        location.reload();
    }

    // start on ukr
    setText(document.querySelector(".swap__language-item img"));

    langWrap.addEventListener("click", (e) => {
        
        if (e.target.tagName == "IMG") {
            setText(e.target);
        }
    });

    function setText(element) {
        const type = element.dataset.type;
        location.href = path + `#${type}`;

        for (let key in langObj) {
            if (typeof(langObj[key][type]) == "object") {
                let elements = document.querySelectorAll(`${key}`);
                if(!elements) continue;
                
                for (let i = 0; i < elements.length; i++) {
                    for (let d = 0; d < langObj[key][type].length; d++) {
                        if(!langObj[key][type][d]) continue;
                        if(i == d) elements[i].textContent = langObj[key][type][d];
                    };
                }
            } 
            
            if (typeof(langObj[key][type]) == "string") {
                let element = document.querySelector(`${key}`);
                if(!element) continue;
                if(!langObj[key][type]) continue;
                element.textContent = langObj[key][type];
            }
        }
    }
}


export default language;
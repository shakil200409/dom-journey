const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightYellow'
}

const dom = document.querySelector('#dom-container');

dom.style.margin = '20px';

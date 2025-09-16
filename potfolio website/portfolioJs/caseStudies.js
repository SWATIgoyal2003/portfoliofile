// let button = document.getElementsByClassName('button');
// button.addEventListener('click', function() {
//     let caseStudy = `<h2>Case Study: Portfolio Website</h2>
//     <p>
//     The goal was to create a personal portfolio website to showcase my skills, projects, and contact information. The website needed to be modern, responsive, and easy to update.
//     </p>
//     <ul>
//     <li>HTML5 for structure</li>
//     <li>CSS3 for styling and layout</li>
//     <li>JavaScript for interactivity</li>
//     </ul>
//     <p>
//     The final website is visually appealing, easy to navigate, and effectively highlights my work.
//     </p>
// `;
//     button.document.getElementmentByClassName('para')[0].innerHTML = caseStudy;
//     button.innerHTML ="Back"

// })
const paras = document.getElementsByClassName('para');
const btns = document.getElementsByClassName('button');

for (let i = 0; i < btns.length; i++) {
    let isOriginal = true;
    const originalContent = paras[i].innerHTML;

    btns[i].addEventListener('click', function () {
        if (isOriginal) {
            paras[i].innerHTML = `<h2>Case Study: Portfolio Website</h2>
        <p>
        The goal was to create a personal portfolio website to showcase my skills, projects, and contact information. The website needed to be modern, responsive, and easy to update.
        </p>
        <ul>
        <li>HTML5 for structure</li>
        <li>CSS3 for styling and layout</li>
        <li>JavaScript for interactivity</li>
        </ul>
`;
            btns[i].textContent = "Back ";
        } else {
            paras[i].innerHTML = originalContent;
            btns[i].textContent = "View Case Study";
        }
        isOriginal = !isOriginal;
    });
}
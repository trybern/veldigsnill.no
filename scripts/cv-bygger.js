// Funksjon for å lese av en json med CV-elenter


// Template string for punktene, hovedsakelig overskrift, punkter og eventuelle kommentarer? Nei, her kan man kan nok gjøre noe bedre.
/* `${title}
${date} • ${location}
${note}` */

// Function to fetch external JSON file
function fetchCVData(callback) {
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    callback(data);
    }
};
xhr.open('GET', 'cv-trygve.json', true);
xhr.send();
}

// Function to render CV sections
function renderCV(cvData) {
const cvContainer = document.getElementById('cvContainer');

// Personal information section
const personalInfoSection = document.createElement('div');
personalInfoSection.className = 'cv-section';

const nameElement = document.createElement('h1');
nameElement.textContent = cvData.name;
personalInfoSection.appendChild(nameElement);

const birthElement = document.createElement('p');
birthElement.textContent = 'Birth: ' + cvData.birth;
personalInfoSection.appendChild(birthElement);

const nationalityElement = document.createElement('p');
nationalityElement.textContent = 'Nationality: ' + cvData.nationality;
personalInfoSection.appendChild(nationalityElement);

cvContainer.appendChild(personalInfoSection);

// Work experience section
const workExperienceSection = document.createElement('div');
workExperienceSection.className = 'cv-section';

const workTitleElement = document.createElement('h2');
workTitleElement.textContent = 'Work Experience';
workExperienceSection.appendChild(workTitleElement);

const workList = document.createElement('ul');
cvData.experience.work.forEach(workItem => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${workItem.title}</strong>, ${workItem.company}, ${workItem.startDate}-${workItem.endDate}`;
    workList.appendChild(listItem);
});

workExperienceSection.appendChild(workList);
cvContainer.appendChild(workExperienceSection);

// Education section
const educationSection = document.createElement('div');
educationSection.className = 'cv-section';

const educationTitleElement = document.createElement('h2');
educationTitleElement.textContent = 'Education';
educationSection.appendChild(educationTitleElement);

// Add your education data here

cvContainer.appendChild(educationSection);

// Languages section
const languagesSection = document.createElement('div');
languagesSection.className = 'cv-section';

const languagesTitleElement = document.createElement('h2');
languagesTitleElement.textContent = 'Languages';
languagesSection.appendChild(languagesTitleElement);

const languagesList = document.createElement('ul');
cvData.languages.forEach(language => {
    const listItem = document.createElement('li');
    listItem.textContent = `${language.language}: ${language.level}`;
    languagesList.appendChild(listItem);
});

languagesSection.appendChild(languagesList);
cvContainer.appendChild(languagesSection);
}

// Fetch CV data and render it
fetchCVData(renderCV);
// Local Storage Support
const getHistory = () => {
    const dataQuery = localStorage.getItem('rcg_history');

    if (!dataQuery) {
        localStorage.setItem('rcg_history', JSON.stringify([]));
        getHistory();
    } else {
        const data = JSON.parse(dataQuery);
        return data;
    }
}

// Elements
const body = document.querySelector('body');
const colorInput = document.getElementById('hex');
const preview = document.getElementById('preview');
const copyButton = document.getElementById('copy_btn');
const genButton = document.getElementById('gen_button');
const devButton = document.getElementById('dev');

// Generate Function
const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = `#${randomColor}`;
    preview.style.display = "block";

    body.style.backgroundColor = color;
    preview.style.backgroundColor = color;
    colorInput.value = color;

}

const copyColor = () => {
    colorInput.select();
    document.execCommand("copy");
}

const viewAsDeveloper = () => {
    colorInput.value = "const randomColor = Math.floor(Math.random()*16777215).toString(16);";
    preview.style.display = "none";
}

genButton.addEventListener('click', generateRandomColor);
copyButton.addEventListener('click', copyColor);
devButton.addEventListener('click', viewAsDeveloper);

getHistory();
generateRandomColor();
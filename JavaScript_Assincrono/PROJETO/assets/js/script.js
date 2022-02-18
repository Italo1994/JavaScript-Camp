const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
        const data = await fetch(BASE_URL)
            .then( (result) => result.json())
            .catch( (e) => console.log(e.message));

        return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats(); 
};

catBtn.addEventListener('click', loadImg);

loadImg();
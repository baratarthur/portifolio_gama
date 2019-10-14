const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

let data = [];
let filteredData = [];

function renderData () {
    let html = "";
    if(filteredData.length) {
        filteredData.forEach(ap => {
            html += `
                <div class="card" >
                    <div style="background-image:url(${ap.photo});" ></div>
                    <h5>${ap.property_type}</h5>
                    <p>${ap.name}</p>
                    <small>R$${ap.price}/noite</small>
                </div>
            `;
        });
    } else {
        data.forEach(ap => {
            html += `
                <div class="card" >
                    <div style="background-image:url(${ap.photo});" ></div>
                    <h5>${ap.property_type}</h5>
                    <p>${ap.name}</p>
                    <small>R$${ap.price}/noite</small>
                </div>
            `;
        });
    }

    document.getElementById('feed').innerHTML = html;
}

const fetchData = async () => {
    try {
        document.getElementById('feed').innerHTML = "Loading...";

        const response = await fetch(url, { method: "GET" });
        const responseData = await response.json();

        data = responseData.map(ap => ap);

        let buttons = "";
        let types = [];
        data.forEach(ap => {
            if(!types.includes(ap.property_type)){
                buttons += `
                    <button onclick="filter('${ap.property_type}')" ><b>${ap.property_type}</b></button>
                `;
                types.push(ap.property_type);
            }
        });

        buttons += `<button onclick="filter()" ><b>all</b></button>`;

        document.getElementById('buttons').innerHTML = buttons;
        renderData();
    } catch (e) {
        console.error('error', e)
    }
}

function filter(filter) {
    filteredData = data.filter(ap => ap.property_type === filter);
    renderData();
}

fetchData();

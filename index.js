const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg'},
    {id: 2, title: 'Oranges', price: 20, img: 'https://produits.bienmanger.com/36106-0w0h0_Organic_Oranges_From_Greece.jpg'},
    {id: 3, title: 'Man', price: 20, img: 'http://vapeshop.dp.ua/image/cache/catalog/Aussie%20Mango-500x500.jpg'},
];

// const modal = $.modal({
//     title: 'VModal',
//     closable: true,
//     content: `
//         <h4>Modal is working</h4>
//         <p>Lorem</p>
//     `,
//     width: '400px',
//     footerButtons: [
//         {text: 'Ok', type: 'primary', handler() {
//                 console.log('primary btn clicked')
//             }},
//         {text: 'Cancel', type: 'danger', handler() {
//                 modal.close()
//             }}
//     ]
// });

function loadData(a_data = []) {
    if (!a_data.length) {
        return;
    }

    const wrap = document.querySelector('.js-row');

    a_data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('.card');
        card.setAttribute('data-id', item.id);
        card.insertAdjacentHTML('afterbegin', `
        <img src="${item.img || ''}" style="width: 300px;" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <div class="btn btn-primary">See price</div>
            <div class="btn btn-danger">Delete</div>
        </div>
        `);
        wrap.appendChild(card);
    });
    return wrap;
}

loadData(fruits);

const modalBtn = document.querySelector('.js-modal');
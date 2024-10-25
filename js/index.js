async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const productsArr = products.map(elemento => Object.entries(elemento));
    const productsArrSliced = productsArr.slice(0,7);
    products.forEach(element => {
        const randInt = randomData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                    <div class="div-${i}">
                        <img src="${productsArr[randIndex][5][1]}">
                    </div>
                    
                    `)
                    const showcase = document.getElementById('showcase');
                    showcase.append(card);
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (min - max + 1)+ max)
        }
    });
}

getData()
const armario = [
    {item: 'camisetas'},
    {item: 'pijamas'},
    {item: 'calças'},
    {item: 'meias'},
];

armario.push({item: 'cuecas'});
armario.pop();

armario[3] = {item: 'cuecas'};
armario.push({item: 'meias'});

console.log(armario.length);
console.log(armario);

const armario2 = [
    'camisetas',
    'pijamas',
    'calças',
    'meias',
]
console.log(armario2.indexOf('calças'));

// indicando qual o indice do objeto pelo findIndex
    // const armario = [
    //     { item: "cueca" }, 
    //     { item: "meias" }, 
    //     { item: "camiseta"}
    // ];
    // // Utilizando findIndex para encontrar o índice
    // const indiceMeias = armario.findIndex(roupa => roupa.item === "meias");
    // console.log(indiceMeias);

armario.forEach((item) => {
    console.log(item)
});

for(let i = 0; i < armario.length; i++){
    console.log(armario[i])
};

for( let item of armario){
    console.log(item)
};
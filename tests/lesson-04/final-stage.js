
function findPairsDivisibleBy17() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                let sum = i + j;
                console.log(`Cặp số: (${i}, ${j}) = ${sum}`);
                count = i ++;
            }
        }   
        
    }
    console.log(`\n Tổng cộng: ${count} cặp`);
}

//Test
findPairsDivisibleBy17();
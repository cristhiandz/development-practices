const {taskOne, taskTwo} = require('./tasks');


async function main() {

    try{

        console.time("Measuring time");
        const results = await Promise.all([taskOne(), taskTwo()]);
        console.timeEnd("Measuring time");

        console.log(`Task one returned : ${results[0]}`);
        console.log(`Task two returned : ${results[1]}`);

    }catch(err){
        console.log(err);
    }
    
}

main();
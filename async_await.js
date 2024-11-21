function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making REquest ${location}`);
        if(location === 'Google'){
            resolve('Google say hi')
        }else{
            reject('You can only talk with Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log(`Processing Response`);
        resolve(`Extra information: ${response}`)
    })
}

// makeRequest('Facebook').then((response)=>{
//     console.log(`Response Received`);
//     return  processRequest(response)
// }).then(processResponse=>{
//     console.log(processResponse);
// }).catch((error)=>{
//     console.log(error);
// })

// using async awiat

async function doWork(){
    try{
        const response = await makeRequest('Facebook')
        console.log('Response Received');
        const processResponse = await processRequest(response)
        console.log(processResponse);
    } catch(err){
        console.log(err);
    }
}
doWork()
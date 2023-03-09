

const cortar_a_barba = new Promise((resolve, reject) => {

    if(1==1){
        resolve(' Cortar a barba!');
    }else{
        reject(`Nao cortei a barba`);
    }
  });


async function resolverPromise() {
    console.log(await cortar_a_barba)
}

resolverPromise()
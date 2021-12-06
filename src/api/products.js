import data from './mock'
export const getProducts = async () => {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    });
}
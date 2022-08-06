function getProductApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    });
    //Xử lý thành công 
    promise.then(function (result) {
        
        renderRelateProduct(result.data.content);
    });

    //Xử lý thất bại
    promise.catch(function (error) {
        console.log('result --> ', error.response.data);
    });
}

function getProductByID(param) {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id='+param,
        method: 'GET',
    });
    //Xử lý thành công 
    promise.then(function (result) {
        console.log('result --> ', result.data.content);
        renderDetailProduct(result.data.content);
    });

    //Xử lý thất bại
    promise.catch(function (error) {
        console.log('result --> ', error.response.data);
    });
}

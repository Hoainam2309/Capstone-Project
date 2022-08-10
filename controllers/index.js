function getProductApi() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  // Xử lý thành công
  promise.then(function (result) {
    console.log("result", result.data.content);
    renderGridProduct(result.data.content);
  });
  // Xử lý thất bại
  promise.catch(function (error) {
    console.log("result", error.response.data);
  });
}

function renderGridProduct(arrProduct) {
  var html = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var product = arrProduct[i];
    html += `<div class="col">
                    <div class="card item-1">
                    <img src="${product.image}" alt="${product.alias}"
                    <div class="card-body">
                    <h2 class="product-name">${product.name}</h2>
                    <p class="product-desc">${product.shortDescription}<p/>
                    </div>
                    <div class="card-footer">
                    <button>Buy now</button>
                    <p class="product-price">${product.price}</p>
                    </div>
                    </div>
                </div>`;
  }
  document.querySelector("#gridProoduct").innerHTML = html;
}

window.onload = function () {
  getProductApi();
};

$(document).on("ready", function () {
    database.createDatabase();
//    $("#lstProducts").on("tap", "li", function () {
//        alert($(this).find("[name='name']").html());
//    });
});
function addProduct() {
    var name = $("#txtName").val();
    var quantity = $("#txtQuantity").val();
    if (!name) {
        alert("Name is required");
    } else {
        var r = confirm("Name: " + name + "\n" + "Quantity: " + quantity);
        if (r == true) {
            product.addProduct(name, quantity);
            $("#txtName").val("");
            $("#txtQuantity").val("");
        }
    }

}
function displayProducts(results) {
    var length = results.rows.length;
    var lstProducts = $("#lstProducts");
    for (var i = 0; i< length; i++) {
        var item = results.rows.item(i);
        var a = $("<a />");
        var h3 = $("<h3 />").text("Product name: ");
        var h4 = $("<h4 />").text("Quantity: ");
        var p = $("<p />").text("Id: ");
        var spanName = $("<span />").text(item.name);
        spanName.attr("name", "name");
        var spanQuantity = $("<span />").text(item.quantity);
        spanQuantity.attr("name", "quantity");
        var spanId = $("<span />").text(item._id);
        spanId.attr("name", "_id");
        h3.append(spanName);
        h4.append(spanQuantity);
        p.append(spanId);
        a.append(h3);
        a.append(h4);
        a.append(p);
        var li = $("<li/>");
        li.attr("data-filtertext", item.name);
        li.append(a);
        lstProducts.append(li);

    }
    lstProducts.listview("refresh");
}

$(document).on("pagebeforeshow", "#loadpage", function () {
    product.loadProducts(displayProducts);
});
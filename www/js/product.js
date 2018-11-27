var product = {
    addProduct: function (name, quantity) {
        database.db.transaction(
                function (tx) {
                    tx.executeSql(
                            "insert into product(name, quantity) values (?, ?)", [name, quantity],
                            function (tx, results) {

                            },
                            function (tx, error) {
                                console.log("addd error: " + error.message);
                            }
                    );

                },
                function (error) {

                },
                function () {

                }
        );

    },
    loadProducts: function (displayProducts) {
        database.db.readTransaction(
                function (tx) {
                    tx.executeSql(
                            "select * from product", [], function (tx, results) {
                        displayProducts(results);
                    },
                            function (tx, error) {
                                console.log("error select the product" + error.message);
                            }
                    );
                });

    },
    deleteProduct: function (_id) {
        database.db.transaction(
                function (tx) {
                    tx.executeSql(
                            "delete from product where _id = ?",
                            [_id],
                            function (tx, results) {},
                            function (tx, error) {
                                console.log("Error deleting: " + error.message);
                            });
                });
    },
    updateProduct: function (_id, newName, newQuantity) {
        database.db.transaction(
                function (tx) {
                    tx.executeSql(
                            "update product set name=?, quantity=? where _id=?",
                            [newName, newQuantity, _id],
                            function (tx, result) {},
                            function (tx, error) {
                                console.log("Error updating" + error.message);
                            }
                    );
                }
        );
    }
};
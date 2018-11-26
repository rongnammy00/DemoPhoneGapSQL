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

    }
};
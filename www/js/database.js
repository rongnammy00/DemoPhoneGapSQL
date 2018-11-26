var database = {
    db: null,
    createDatabase: function () {
        this.db = window.openDatabase(
                "product.db",
                "1.0",
                "product database",
                100000);
        this.db.transaction(
                function (tx) {
                    tx.executeSql(
                            "create table if not exists product(_id integer primary key, name text, quantity integer)", [],
                            function (tx, results) {

                            },
                            function (tx, error) {
                                console.log("error create DB: " + error.message);
                            }
                    );
                },
                function (error) {
                    console.log("Transaction error: " + error.message);
                },
                function () {
                    console.log("Create DB successfully");
                }
        );
    }
}


const count = db.produtos.find({}).count();

db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: count });

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });

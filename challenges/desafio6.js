db.produtos.find(
  {
    $or: [{ curtidas: { $gt: 10, $lte: 100 } }],
  },
  { nome: 1, _id: 0, curtidas: 1 },
);

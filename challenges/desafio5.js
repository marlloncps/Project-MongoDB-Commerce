db.produtos.find(
  {
    $or: [{ curtidas: 36 }, { vendidos: 85 }],
  },
  { nome: 1, vendidos: 1, _id: 0, curtidas: 1 },
);

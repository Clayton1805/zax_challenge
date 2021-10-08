module.exports = {
  motoboys: [
    {
      id: 1,
      valorDaEntregaR$: 2,
      exclusividade: []
    },
    {
      id: 2,
      valorDaEntregaR$: 2,
      exclusividade: []
    },
    {
      id: 3,
      valorDaEntregaR$: 2,
      exclusividade: []
    },
    {
      id: 4,
      valorDaEntregaR$: 2,
      exclusividade: [1]
    },
    {
      id: 5,
      valorDaEntregaR$: 3,
      exclusividade: []
    }
  ],
  PedidosDasLojas: [
    {
      id: 1,
      pedidos: [
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
      ],
      porcentagemDoValorPorEntrega: 5
    },
    {
      id: 2,
      pedidos: [
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
      ],
      porcentagemDoValorPorEntrega: 5
    },
    {
      id: 3,
      pedidos: [
        { valorFixoR$: 50 },
        { valorFixoR$: 50 },
        { valorFixoR$: 100 },
      ],
      porcentagemDoValorPorEntrega: 15
    }
  ]
};

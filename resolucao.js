const { motoboys, PedidosDasLojas } = require('./data');

// objetivos:
//  - que a loja pague o mínimo possível
//  - que as entregas aconteçam o mais rápido possível (sem deixar ninguém parado)

// já que não tenho o tempo de vigem vou admitir que cada entrega demora o mesmo tempo, e desconsiderar distancia

function resolucao() {
  const motoboysSort = motoboys
    .sort(({
      valorDaEntregaR$: a
    },
    {
      valorDaEntregaR$: b
    }) => a - b);

  const objNExclusivos = {}
  motoboys.forEach((motoboy) => {
    motoboy.exclusividade
      .forEach((loja) => objNExclusivos[loja] = (objNExclusivos[loja] || 0) + 1)
  });

  const lojasSort = PedidosDasLojas
    .map((loja) => ({...loja, motoAssociados: (objNExclusivos[loja.id] || 0)}))
    .sort(({
      porcentagemDoValorPorEntrega: a1,
      motoAssociados: a2
    },
    {
      porcentagemDoValorPorEntrega: b1,
      motoAssociados: b2
    }) => b1 - a1 || a2 - b2);

  const objMoto = {};

  while (lojasSort.some(({ pedidos }) => pedidos.length)) {
    motoboysSort.forEach((moto) => {
      lojasSort.find((loja, index2) => {
        if (loja.pedidos.length) {
          if (
            !moto.exclusividade.length
            || moto.exclusividade.some(e => loja.id === e)
          ) {
            const recebeu = (moto.valorDaEntregaR$ * (loja.porcentagemDoValorPorEntrega / 100) + loja.pedidos[0].valorFixoR$)
            objMoto[moto.id] = [...(objMoto[moto.id] || []), {
              lojaId: loja.id,
              recebeu
            }]
            lojasSort[index2].pedidos.splice(0, 1);
            return true;
          }
          return false;
        }
      });
    });
  }

  return objMoto;
}

module.exports = resolucao();
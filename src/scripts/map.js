const brazilStates = {
  'AC': { name: 'Acre', path: 'M103 244.5h-3v-1h-2l-3 2h-4v-1h-1l-1 1v-17h1v-1l-1-1v-1h1v-1h-1v1h-1l-1 1h-1v1l-1 1h-1v1h-2v1l-1 1H69v-2l-1-1v-1l-1-1v-1h-1v-1h-4l-1-1h-6 1v-1h1v-1h1v-1h1v-2l-1-1h-1l-1-2v-1h-2v-3h-1v-1h-2v-2h-1v-3h-2v-2h1v-1h-1v-1h-1l-1-2h-1 1v-2h-1v-1h1v1h1v-1h2v-1l-1-2 15 6 29 8 8 4 38 18 3 1v1h-2l-1 1-3 3h-1v1l-1-1h-1v1h-1v1h-1l-1 1h-1v1h-1v2h-1v-1h-4v1l-1 1-1 1v1h-2v1h-2v1h-3v-2h-1v1h-1v-1h-8' },

  'AL': { name: 'Alagoas', path: 'M550 217.5v1l-1 1v1l-1 1-1 1-1 1-1 2h-1v1l-1 1h-1 1v-1h-1v1l-1 1v-2h-1v1h1v1h1-1v2h-1v1h-1v1h-1v1l-2 1v2l-2 2v-1h-2v-2h-1v-1 1h-1v-1h-2v-1h-1v-2h-1l-1-1h-2v-1l-1-1h-3l-1-1-1-1h-2v-1h-2v-1h-2v-1l-1-1h1l1-1v-1h2v-1h1v-1h1v-2h1v2h1l1-1h1v1h1v1l3 2 1 1h1l1 1 1-1 1-1 2 1h1v-1h3l1-1v-1l2-1v-1h2l1-1h1v1h1l1-1h3l1 1h2' },

  'AP': { name: 'Amapá', path: 'M296 68.5v2h2v1h1v1h2l1 1v-1h1v1h1v-1h2v-1h1v-1h2l1 1h3v-1h1v1h1v1h5v-1h1l1-1 1-1v-1h1v-3l1-2h1v-1l1-1v-2l1-1 2-3 1-1v-2h1v-1h1v-1h1v-2h2l1-2v-1 1l1 1v2h1l-1-1v-1l-1-2v-2h1l1 1 1 1 1 1 1 1v6-2l1-1v7l1 1v4h1v2h1v3h1v1h-1 1v1h1v4h-1v-1 2h1v-1h2v2l1 1v1h5l1 1h1v1l1 1v4h-2l-1 1h-1 4v1h-1v1h-1v-1 1h-1v1h-1v1h-1l-1 1v1l-1 1h-1v1l-1 2-1 1-1 1-1 1h-2v1l-1 1-1 1h-2v1l-1-1v1h1l-1 1v2h-1v2h-2v1l-1 1v1h-1v4l-1 1h-1v1l-1-1-1 1h-1v-1h-3v-1h-1v-1h1v-1h-2v-3h-1v-1h-1v-3h-1v-1l-1-1h-2v-2l-1-1v-3h-1v-3h-1v-1h1v-2l-2-1h-1v-1h-1v-2l-1-1v-1h1v-1h-2v-1h-1v-1h-4v-1h-2v-2h-2v-1h-3l-1-1h-1l-1 1v-1l-1-1v-2h1v-1h-1v-1h1v-3h-1v-1h1' },

  'AM': { name: 'Amazonas', path: 'M131 73.5h1v2h1l1 2 1 1v7h4l1 1 1 1 1 1 1 1v1h1l1 1h3v-1h2v-1h1l1-1h3v1h1l-1 1v2h1l1-1v-1l1-1h1l1-1v-2h2v-1h2v-1h2l1-1h1v-1l1-1h2l-1 1v1h1v-1l1-1 1-1h1v-3l1-1v-1h3l2-2h3v-2l1 1h3v2h4v1h1v3h-1v2l1 1 1 1v1l1 2v1l1 1v4h-1v1l1 1v2h-1v7h1v2h1v3h1v2l-1 1h-1v-1 2h1v1l1 1h1l1 1 1 1h1v1h1v1l1 1v1l1-1h1v1h1v-2l1-1v-6h1v-1l1-1h2v-1h2l1 1h2v1h1v2h1v1h1v-1h2v-1h2v-1l-1-1v-2h1v-3h1v-2h1v-1l1-1v-1h1l3-1 12 1v7l1 1h1v4h1v1l1-1v1h1v1h1v2l1 1h1l1 1v1h1l1 1h1v1h2v1h1v1h1l1 1h1l1 1h3v1h1v1h1v1h1l1 1h2l-1 1v1h4v1h2-1v2l-5 10-20 43v1l-1 1h-1v2l1 1v1l1 1 1 1 1 1v2h1-1v1h-1v2h1l-1 1v1h-1v1h-1v2h1v5h-1v4h-1v1l-1 1h-40v-1h-2v1h-1v1h-2v-1h-2v-2h-2v-3h-1l-1-1v1h-1v-2h-1v-2h-1l-1-1h-10v2h-2v2h-3v1h-1v1h1v2l-1 1h-2l1 1v2h-4v1l-1-1v1h-5v1h-1v2h1-1v1h-1v1l-1 1-1-1v-2h-1v1h-1l-1 1v1h-1l-1-1-1 1v1h-1l-1 1v-1h-1v-1h-1v-1h-1l-1 1h-1l-1-1h-2v2l-1 1-1 1h-1l-1 1h-1l-1 1-38-18-8-4-29-8-15-6v-3h1v-1h1v-1h2v-1h1v-1h3v-2h1l-1-1v-2h-1v-2h1v-2h1l1-2v-1h1v-5h1v-1h-1v-1h2v-1h3v-1h1v-1h1v-1h1v-1l1 1v-1h1l1-1v-1l1 1v-1h1v-1h6v-1h1v1l1-1 1-1v1h1v-1 1h1v-1l1 1v-1l1 1v-1l1-1v-1h2v-1h1v1h1v-1 1h1v-1h1v1h1v-1 2h1v1h1v-1h1v1h1l1-1v-3l1-2v-4l1-2v-2l1-3v-4l1-2v-4l1-2v-2l1-2v-4l1-1v-4h-1v-1h1-1v-1h-1v-2l-1-1 1-1-1-1v-1l-1-1h-1l-1-1h-1v-1l-1-1h-1v-9l1-1h3v-1h3v-1h2v1h3v-3h-1l1-1h-1v-1h-6v-1h-1l-1 1v-9h3l1-1 1 1h17v-1h-1v-1l1-2v1h1v2h1v1h2l1-1 2-2 1-1v-1h2' },

  'BA': { name: 'Bahia', path: 'M520 251.5h1l1-1v1l-1 1-1 2v1h-1v2l-1 1-1 2-1 1-1 2-1 1-1 1v1h-1l-1 1v2l-1 1h-1v1h-3 1v-4h-2v-1h-1v-1 3h-1v1h-1v-3 1l-1 1h1v1h2v2h-1v1h-1v1h1-1v1h-1v2h-1v-1 1l-1 1h1-1v2-1h1v-1 2h1v2h-1v1h1-1v-1h-1v-1 1h-1 1l1 1v1h-1l1 1v1h1-2v1h1-1 1v1-1l1-1v-2 4h-1v1h1v1h-1v12l1 1v5l1 1v3h-1v3l-1 1v3l-1 2v3l-1 1v10h1l-1 1-1 1v1h-2v1l-1 1-2 2v2l-7-4v-1h-1v-1h1v-2h-1l-1-1-1-1v-1l-1 1v-2h-1v-1h1-2 1v-4l1-2v-1h3v-4h2v-1l1-1 1-1v-2h1v-2h-1v-1h-1v-1h-2v-1h-3l-1-1v1h-1v-1h-1v-1l-1 1h-1v-1h-3v1h-4v-3l-2-2-4-4h-1v1h-4v-1h-2l-1-1h-1v-1h-2l-1-1-1-1-1-1h-1v-1 1h-1v-1h-3l-2 1v1h-1l-3-1h-2v-4h1v-1h-1v-1h-7l-1 1h-2v1h-1l-1 1h-1v1l-3 2h-2v1l-1 1h-1v1h-2v1h-1v1l-1 1h-3l-1 1h-1l1-1v-2h1l-1-1v-1l1-1v-6l-1-1v-1h-1l-1-2-1-1v-6l1-1v-1h1v-2h-1v-3h2v-1h-1l-1-1h-1v-2l1-1v-2h-2v-5h1v-1h1l1-1v-1h-1v-1 1h-1v-2h1l1-1v-1h-1l-1-1h-3v-1h-1v-2l1-1 1-1v-2h1l1-1v-1h-1v-1h1l1-1h1v-1h1v-1h2v-1h1v-1h3l1 1v2h1v1l1 1v1h2v1h5l1-1v-1h1v-1h1l1-1h3v1h1v-1h1l1-2h2v-2l1-1v-1h1v-3l1-1h-1v-2l-1-1v-1l-1-1h3v-2l1 1h1v-1h1v2h1v-1h2v1-1h2v1h1v1h5v-1l1 1v-1h1v-1h1v-1h3v-1h4v-1h1v-2h2v-1h1v-1h1v-1l1-1v1h1v-1h2v1h2v1h1v4h1v1h1v3h3v-1h2v-1l1-3h4v-1h1v-2l1-1h2l-1-1 1-1h1l2-1h2v2h3v1h3v1h1l1 2 1-1v-1h1v2h3v1h-1v1h1v2l1 1v1h2v4l1 2h1v1h1v9l-1 1h-4l-1 1v1h1v1l1 1v2h2v1h-1l1 1h-1l1 1h1l1 1v1h2v-1l1 1 1-1' },

  'CE': { name: 'Ceará', path: 'M471 140.5v-2h-1 7l1-1h7l1 1v-1h1v1h2l1 1 1 1h1l1 1h1l1 1h1l1 1h1v1h2v1h1v1h1l1 1 1 1h1l1 1h2v2l1 1h1l1 1 1 2 1 1 1 1h1l1 1 1 1 1 1 1 1h2l1 1h1v1l-4 2-2 1v1l-1 2-2 3-1 1v1l-1 1v2l-2 2-1 1h-1v-1 1h-1v1h-1v3h-1 2-1v1l-1 2v3h-1v2h1v3h1v3h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-2h-2l-1-1v-1h-1l-1-1h-1v-1h-1l-3-1h-1l-1 1h-7v-3l1-2 1-2v-1l-1-1h-2l-1-1v-1l-1-1v-3l-1-2v-4l-1-1v-4h-1v-1h-1v-1h1v-1l-1-1v-2h-1v-3h-1v-3h1v-1h1v-3l-1-1-1-1v-3h-1v-2h-1v-5l2-2v-1' },

  'DF': { name: 'Distrito Federal', path: 'M381 304.5h5l5 1h1v7h-12v-4h1l-1-1v-1h1v-2' },

  'ES': { name: 'Espírito Santo', path: 'm492 343.5-1 3v12l-1 3-2 1-1 1-1 2h-1 1v1h-1v3l-1 1v-1h-1v1h-1 1v1-1h1v1h-1v2l-1 1v1h-1v1h-1v1h-1v1-1l-1 1h-1v3h-1l-1 2v1-1h-7v-1h-2v-1h-1v-4h-2v-1l1-1h-1v-1h1v-2h-1v-1h1v-1l1-1h5v-4h2v-4h1v-1h1v-1h1v-5l-1-1v-2h-2v-1h-1 4v-2h-1v-4h-1v-1 1h-1l1-1v-2h1l1-1h1v1h1v-1l-1-2h-1 4l1-1h1v1-1h1-1 2v1h2v1l7 4' },

  'GO': { name: 'Goiás', path: 'M406 268.5v1h1l1 1h1v1h-2v3h1v2h-1v1l-1 1v6l1 1 1 2h1v1l1 1v6l-1 1-1 1h-3v-2h-1l-1-1-1 1v4h-1l-1-1h-2v1l-1 2h1v2h-1v2l1 1v3h1-1v1h-4v2h-2v-7h-1l-5-1h-5v2h-1v1l1 1h-1v4h12v4h-1v1l-1 1h1v1h1v1h1v1l1 1v3h-1l1 1h-1v1h-1v1h-1v2h-1v-1 1l-1 1h1v1h3v2l-1 1v4h1-1v1h-1v1h-2v1h-1v1l-3 2h-1l-1-1h-2v-1h-10l-1 1h-2v1l-2 2h-1l-1-1v-1h-1v1l-3 1h-4v1h-3l-2 3v2l-1 1h-2v1h-1v1h-1v3h-1v-1 1l-1-2h-1v-1h-3v-1h-1v-1h-3l-3-1v-1h-2v-1h-1l-1-1h-2l-1-1-1-1h-5v-2l1-1v-1l-1-1h-1v1h-1v-5l-1-1v-2h-1v-1l-1-1v-3l1-1v-3h1v-1h1v-3l1-1h2v-1l1-1v-1h1v-2l-1-1 1-1h1v-2h2v-1h1v-1l1-1h3v-1h2v-1l1-1v-2h1v-2h1l-1-1h1v-2h1v-1h1v-1h2v-1 1h2v-1h1v-3h1v-2h1-1 1v-2h-1v-1h1v-3h1v-6h1v-2h1v-1h1v-2h1v-4h1v-4h1v-1l1-1v-1h1l1-1h1v1l-1 1v2l-1 1v2l3 1h1v1l3 1 2 1h3v-3l3-4h1v-1 2h1l1 1h1v7h1v-1h1v-2h1l1 1h2v-1l1-1h1v1h1v1h2l1 1 2 1h1v-1l-1-1v-1l1-1v1h1v2h1v-1h3l2-2h4l1-1 1-1h1l1-1h2l1-1' },

  'MA': { name: 'Maranhão', path: 'M408 116.5h1v-2h1v1h-1v1h1v1-1l1-1v-1 3-1 1-1h1v1h-1 1v1-2h1v-1 2-1h1v2-1h1v1-1 1-1 1h1v1h-1 1v-2h1v1h-1v2-1 1h-1 1v1l1-1-1-1h1v1-1l1-1 1 1h-1v1h-1 1l-1 1h1v2h1v-2l1-1h1v-1h1v1h1v1h-1 1v-1l1-1v1l-1 1v1h1v-1 1h1-1v-1h1v1-1 2h1v1h-1 2v-1h1-1v1h1v1-1 1-1h1v1h-1 1v2h-2 2l-1 1h-1v1h1-1v1h-2 2v1h-1v1-1h1v1-2l1-1 1-1 1 1v1h1v1l-1 1h-1v-1h-1v1h1v1h-1v1h-1 1v-1 1l-1 1v3h-1v2h1v1h-1v1h-1v1h1-1l1-1h1v-1h1v-1h1v-1h1v-2l1-2v-2 1h1l-1-1h1l2-1h1-1l1 1v1h-1v1h-1v1h-2v1h1-1 1v-1 1l1-1v2-1h1v-1 1-1 1h1v-2h1v-1 1-1h1v1-1h1v-1h1v1h1v-1h-1 2v-1h1v2-1 1h1v-1h-1 1l-1-1h1-1v-1h4l1 1h1l1 1h1l1 1h2v1h2v1h3v1h4v-1h-1 3-1v2l1 1v1h-1v1h-1v1h-1v1h-1l-1 2h-2l-1 1h-1v-1 1h-1v1l-1 1v2h-1v2h-1l-1 1v2h-1l-1 1h1v2h1v3h-1v2h1v3h1v4h-1v1h-1v1l-1 1-1 1v4l1 1h-1v1h1l1 1 1 1v1h1-1v4h-1v1l-1 1h-5v1h-1v-1h-1v-1h-4v1h-1v-1 1h-1v1l-1-1v1h-1v1l-1 1v1h-2v1h-1l-1 1v1h-1l-1 1h-2v1h-3l-1 1h-2v1h-1l-1 1v1l-1 1v4l-1 1v1l-1 1v2l-1 1v1h-1v1h-1v5h1l-1 1h1v2h1v2h-1v3h1l-1 1v3l-1 1v2h-1l-1-1h-1v-1h-1v1h-1v-1h-1v-1l-1-1v-2h-1l-1-1v-1h1v-3h-1l-1-1h-1v-2l-1-1v-1h-3v-1h1v-1h1v-1h1l-1-1v-1h1v-3h1l1-1h3l-1-1h1v-5h-5v1h-3v-1l-1-1v-1h-1v-1h-1 1v-1h-1v-1h-2v-1h-1v-1h1v-2h-2v1-1h-1v-1h1l1-1 1-1v-6h1v-10h-1v-4h-2v-1h-3v-2h-4l-2-1h-3v2h-2l6-5 6-5h1v1l1-1h1v-1h1v-2h1v-1h1v-3l1 1v-1h1v-1l1-1v-1l1-1v-3h1v-2h2v-1l1-1h-1 1v-1h1v-3h1v-1h-1v-2h2v-1h1v-3h-1 1v-1h1v-1l1-1v-2h1v-1h-1 1v-1h-2v-1h1l1-1v-3l1-1h-1v-1h1v-1' },

  'MT': { name: 'Mato Grosso', path: 'M247 316.5h-8l-3-1h-11v-6l-1-2v-3l-1-1-2-2-1-1v-1h4v-5l-1-1v-1h-1 1v-1l-1-1v-1l-1-1v-2h1v-3h-1v-1l-1-1h-1l-1-1v-1h1l2-2h1v-1l1-1v-1l1-1v-2h1v-1h1l1-1v-2l1-1 1-2 1-1h-1v-4l-1-1v-1h-1v-1h-1v-4h1v-1h1v-4h-1v-1h-3v-1h-1v1h-1v-2h-15l1-1v-7l-1-1v-5h1v-1h-1v-2h1v-1l-1-1v-2h-1v-1h1v-4l1-1v-1h-1v-1h-1 40l1-1v-1h1v-4h1v-5h-1v-2h1v-1h1v-1l1-1h-1v-2h1v-1h1l1 1 1 2v1l1 1v3h1v1l1 1v1h1v3h-1v1h1v3h1v1h1v1h1l1 1 1 1h1l1 1v2h3v1h1v1h3v1h1l18 1 49 3 2 1h12v1l-1 1v1l-1 1v3h-1v3h-1v3h-1v6h-1v4h1v1l-1 1v2h1v2h-1l1 2v8h1v1h1v2h-1v4h-1v2h-1v1h-1v2h-1v6h-1v3h-1v1h1v2h-1 1-1v2h-1v3h-1v1h-2v-1 1h-2v1h-1v1h-1v2h-1l1 1h-1v2h-1v2l-1 1v1h-2v1h-3l-1 1v1h-1v1h-2v2h-1l-1 1 1 1v2h-1v1l-1 1v1h-2l-1 1v3h-1v1h-1v3l-1 1v3l1 1v1h1v2l1 1h-3l-1-1-1 1h-1l-1-1h-1l-1 1h-1l-1-1h-1l-1-1h1v-1l1-1v-1h2v-6h-1v1h-1v1l-1 1-1 1h-1v1h-1l-1 1h-2v-1l-1-1h-4v1l-1 1h-4l-1-1h-2v-1h-2v-2h-3v-1h-2l-1-1-1-1-1 1h-1l-1 1h-6v1h-1v2h-1v2l-2 1v1h-2l-2 1h-1v1-1h-1v-1h-1v-1h-2v-3h-3v-1h-1l-1-1h-1v-1h-2v-5h-1v-4l2-2v-3h-1v1h-1' },

  'MS': { name: 'Mato Grosso do Sul', path: 'm254 367.5 1-1-1-1-1-1-1-1v-2l1-1v-1l1-1v-2l1-1 1-1v-1h1v-2h-1l1-2v-2l1-2 1-2v-1h1v-1h-1v-1l-1-1-1-3v-1h1v1h1v1h1v1-1h1l2-1h2v-1l2-1v-2h1v-2h1v-1h6l1-1h1l1-1 1 1 1 1h2v1h3v2h2v1h2l1 1h4l1-1v-1h4l1 1v1h2l1-1h1v-1h1l1-1 1-1v-1h1v-1h1v6h-2v1l-1 1v1h-1l1 1h1l1 1h1l1-1h1l1 1h1l1-1 1 1h3v5h1v-1h1l1 1v1l-1 1v2h5l1 1 1 1h2l1 1h1v1h2v1l3 1h3v1h1v1h3v1h1l1 2v1h-1v9l-1 1-2 1h-1l-1 1v1h-1v1h-1v1l-1 1v2l-1 1v1l-1 1-1 1v3l-1 1v1h-2v2h1l-1 1h-1v2h-1l-1 1v2l-1 1h-1v1h-1l-1 1h-1v1h-1l-1 1h-1l-1 1v1l-1 1-1 1-4 2h-1v1l-1 1v3l-1 1v1l-2 1h-1v1l-1 2v2l-1 1v2h-1v1h-1l-1-1-1-1-3-2-1 1-1 1h-1l-1 1h-6v-4h-1v-1h-1v-2l1-1v-1h-1v-3l-1-1h1-1v-6l-1-1v-2l-1-1-1-1h-5v-1h-1v-1h-1v-1h-2v2h-1v1l-1-1h-1v1h-1v-1l-1 1v-1h-6l-1-1v1l-1-1h-1v-1h-2v1h-2v-1h-1v-1h1v-4h1v-1h-1v-3l1-1v-5h1v-1h-2v-1h1v-1h-1 1v-2h-1v1-1h-1v-3l-1-1v-1h-1v-1h1-1v-1h2v-1h1v-1 1' },

  'MG': { name: 'Minas Gerais', path: 'm403 294.5 1 1h1v2h3l1-1v1l1 1h-1v2l-1 1h1l1-1h3l1-1v-1h1v-1h2v-1h1l1-1v-1h2l3-2v-1h1l1-1h1v-1h2l1-1h7v1h1v1h-1v4h2l3 1h1v-1l2-1h3v1h1v-1 1h1l1 1 1 1 1 1h2v1h1l1 1h2v1h4v-1h1l4 4 2 2v3h4v-1h3v1h1l1-1v1h1v1h1v-1l1 1h3v1h2v1h1v1h1v2h-1v2l-1 1-1 1v1h-2v4h-3v1l-1 2v4h-1 2-1v1h1v2l1-1v1l1 1 1 1h1v2h-1v1h1-2v-1h-2 1-1v1-1h-1l-1 1h-4 1l1 2v1h-1v-1h-1l-1 1h-1v2l-1 1h1v-1 1h1v4h1v2h-4 1v1h2v2l1 1v5h-1v1h-1v1h-1v4h-2v4h-5l-1 1v1h-1v1h1v2h-1v1h1l-1 1v1h-1v2h-2v2h-1v3l-1 1v2h-1v2h1v1h-2v1h-1l-1 1h-1l-1 1h-2l-1 1h-1v1h-2 1v-1h-3l-1 1h-6l-1 1h-2v1h-1l-1 1v-1h-2l-1 1h-2v1h-2v1h-3l-1 1h-1v1h-1l-1 1h-1v-1h-1v1h-3 1v-1h-1v1l-1 1h1v1h-1v1h-1v-1h-1v1h-3 1-3v-2h-1l-1-1h1v-2h-2v-1h-1v-1l-1-1 1-1v-1h1l-1-1h-1 1v-6h1v-1h1v-2h-2v-1h-3v1h-2v-3h-1v-2l-1-1v-1h-1v-1l1-1v-1h1v-2l-1-1h-1v-5h-1l-1-1v-1h-1v-1 1h-1l-1 1v-1h-3v2h-1v-2h-1v2h-2v-2h-1v2h-8v4h-1v-3l-1-1h-1v2h-2v-2h-1v-1l1-1h-2l-1-1h-7l-4-1-1-1h-2v1l-1 1h-1l-2 1-1 1h-1v-7h1v-2 1h1v-3h1v-1h1v-1h2l1-1v-2l2-3h3v-1h4l3-1v-1h1v1l1 1h1l2-2v-1h2l1-1h10v1h2l1 1h1l3-2v-1h1v-1h2v-1h1v-1h1-1v-4l1-1v-2h-3v-1h-1l1-1v-1 1h1v-2h1v-1h1v-1h1l-1-1h1v-3l-1-1v-1h-1v-1h-1v-1h-1l1-1v-1h1v-4h2v-2h4v-1h1-1v-3l-1-1v-2h1v-2h-1l1-2v-1h2l1 1h1v-4l1-1' },

  'PA': { name: 'Pará', path: 'm290 67.5-1 1h-1v1h-6l-1-1h-2v2h-1v1l1 1v1h1v3l-1 1-1-1h-3v-1h-3v1l-1-1v1h-5v-1h-1v-1h-1l-1 1h-2v1l-1 1-1 1h-3l-1 1h-2v2h-2v-1h-3v1l-1 1v2h-3l-1 1h-1l-.928-.928L242 98.5v7l1 1h1v4h1v1l1-1v1h1v1h1v2l1 1h1l1 1v1h1l1 1h1v1h2v1h1v1h1l1 1h1l1 1h3v1h1v1h1v1h1l1 1h2l-1 1v1h4v1h1v2l-5 10-20 43v1l-1 1h-1v2l1 1v1l1 1 1 1 1 1v2h1l1 1 1 2v1l1 1v3h1v1l1 1v1h1v3h-1v1h1v3h1v1h1v1h1l1 1 1 1h1l1 1v2h3v1h1v1h3v1h1l18 1 49 3 2 1h12l1-1v-1l1-1v-3l1-1v-1h1v-1l1-1h1v-2h1v-1h2v-1l1-1v-1l1-1v-1l1-1v-1l1-2v-1h1v-4h-1l-1-1-1-1v-2l2-2 1-1v-2l-1-2h1v-1l2-1 2-1h1l1-1h1v-3h1v-1h2v-2l1-1h1v-1h-1v-1h1v-2h-1v-1h2v-2h-1l-1-1v-1h-4l-1-1 6-5 6-5h1v1l1-1h1v-1h1v-2h1v-1h1v-3l1 1v-1h1v-1l1-1v-1l1-1v-3h1v-2h2v-1l1-1v-1h1v-3h1v-1h-1v-2h2v-1h1v-4h1v-1l1-1v-2h1v-2h-2v-1h1l1-1v-3l1-1h-1v-1h1v-1h-1l1-1h-1.5l.5-1h-4v-2h-1v1h-1v-1h1l-1-1h-1v1h-1v-2h-1v2h-1v-2h-1v2l-1-1h-1v-1h-1v-2h-1v1h-1v-1h-1v1h-1l-1 1v-2h-1v1h-2v1h-1v1l-1-1v-1l-1 1-1 1h1v1h-1v-1h-1v1l-1 1v1l1 1v1h-1v2l-1-1v-1l-1 1v3l1 1v1h-1v-1h-1v-1l-1-1-1 1-1 2h-1v1h-1v-1h1v-1h-1l-1 1v1h-1v1h-1v1l-1 1-1 2v1l-1 2v2h-1v2h-2v-1l1-1v-2h1v-2h1v-3h1v-2h1v-1h-2v1l-1 1v-1l-1 1v-1l-1 1 1 1h-1v-1h-3l-1-1h-1l-1 1h-3v1h-1v1l-1-1v-1h-1v-1h4v-1h1v1l1-1h2l1 1h2v-1l-1-1 1-1v2l1 1v-1h3v-1h1v-1h-1v-1l1 1 1 1 1-1v-2h1v1h3v-1h-1v-2l1 2h1v-2h-1v-1h-1v-1l1 1h1v-1h2v-2l1-1 1-1-1-1h1v-3l1-1v-1h1v-1h-3v-1h-1l-1 1-1-1h-1v-1l-1 1h-1l-1-1h-3l-1 1h-1v1h-2l-2-1-3-1h-5v1l-1-1v1h-2v2h-1v3l-1 1v-1h-2v1h-2v2h1l1-1h2v2h-3v2l-2 1-1 1-1 1v-1l-1 1v1h-2v1h-1l-4 2h-1l-1 1h-2v-2l-1 1h-5l1-1h2v-1h3v-1h1l1 1h1l1-1v-2h1l-1-1-1 1h-1v-1h-3v-1h-1v-1h1v-1h-2v-3h-1v-1h-1v-3h-1v-1l-1-1h-2v-2l-1-1v-3h-1v-3h-1v-1h1v-2l-2-1h-1v-1h-1v-2l-1-1v-1h1v-1h-2v-1h-1v-1h-4v-1h-2v-2h-2v-1h-3l-1-1h-1l-1 1v-1l-1-1v-2h1v-1h-1v-1h1v-3h-2l-1-2h-2zm47 51v-1l2-1v-1l1-1h1v-3l1-2v-1h-1v-1h-1l-1 1h-1l-1 1v1l-1 1-1 1v2h1l-1 1h-1v1l-1 1v1l-1 1v1h1l1-1h1v-1zm41-2h1v-2h-1v1h-1v1zm6-6 1-1h-1zm11 1h1l-1-1zm11 3 1-1v-1h-1zm2 1v1l1-1zM241.072 84.572 241 83.5v1zM353 92.5l-1 1v2l-1 2v1h1v-1h1v-1h1l1-1 2-1v-1l-1-1v1h-2l-1 1zm-1 6v1h1v1h3l1 1h2l1-1v-1l1-1 1-1h1v-2h-1l-1 1h-1l-1 1h-1v-1h-1v1l-1 1h-2zm0 1h-1v-1h-2v2h1v1h2zm4-3-1 1h1zm9 3-1 1h-3l-1 1v1h5v-1h1v-1h-1zm-19 1-1 1v1l-1 1v1h1v1l1-1 1-1h1l1-1v-1h-1v-1zm-4 2v1h1v-1zm0 1h-1l-1 2v1h1l1-1zm4 11h1v2h-1l-1-1h1zm3 0h1v1h-1l1 1h-1v-1zm-2 6h1l2 2v1h-1v1h-1v1l-1 1h-1v-1h1v-1h1v-1h1l-1-1v-1h-1zm12 7h1v1h-1z' },

  'PB': { name: 'Paraíba', path: 'M553 185.5v5h1v3h-1 1v-1h1l-1-1 1 1v7h-2v-1h-1v-1h-4v1h-2v1l-1 1-1 1h-2v1h-1v-1 1h-1v1-1h-1v1h-1v-1h-1v1-1h-1v1l-1-1h-1v2h-3v3h-1l-1 1h-2v1l-1-1h-1v-2h-1v-1h1-1v-1h-1v1h-1v-1h1v-2h1v-3h1l1-1v-1h-1l-1-1-1-1-1 1h-1v1-1l-1 1v1h-1l-2 1-1 1h-1v1h-1v1h-2v1-1h-1v1-1h-1v1h-1v-1h1-1v-1h-1v1-1h-1v1h-1v-1h-1v-1h-1v-1h1v-1h1v-3h-1v-3h-1v-2h1v-3l1-2v-1h1v-1 1h1l1 1h3l1-1v1-1h2v-1h1v-2h1l1-1h4v-1h2v2h-1v1l-1 1h-1v2l-1 1v2h3v1h3v-1h2l1 1h1v1l-1 1h3v-1h1v-2h-1v-1h2v-1h-1v-2l1-1h2v1h2l1 1v-1l1 1h2l1-1h1l1 1h3v1h1v-1h2l1 1v-1h1' },

  'PR': { name: 'Paraná', path: 'M301 433.5v-4l1-1v-2h-1v-3h2v-1h1v-2l1-1v-2l1-2v-1h1l2-1v-1l1-1v-3l1-1v-1h1l4-2h1v-1h1v-1h6l1 1v-1h1l1 1 1-1v1h1v-1h1v-1h1l1 1h1v1h1v-1l1 1h2v1h1v-1h3v1h1l1 1h3v1h1v1h11v1h1-1 1v1h2v1l1 1v6h1v4h1v2h1v1h1v2h1v2l-1 1h1v1h-1v2h4v-1l1 1h5l1 1v1h-1v3l1 1v-2h2v1h2v3h2-1v1l-1 1v1h-1v-2h2v-1h-1v1h-2v1-2h-1l1 1h-1v-1h-1l1 1h-1 1v1h-1 1v1h-3l-1-1v2h3v1-1h1l1 1h-1l-1 3-1 1v-1h-1 1v1h-3 3v2h-1v-1l-4 1h-4v1h-1l-1 1h-1v1h-2l-1-1-1-1h-1v-1h-2l-1 1-1-1v1h-1v-1h-1v1h-1v-1h-2v1h-1v1h-1v1h-1l-1 1h-1v-1 1-1h-2v1h-1l-1 1v4h-1l-1 1v-1h-3v-1l-1 1h-2l-1-1h-2v-1h-1v-1h-6v-1h-7v-1h-1l-1-1h-1l-1 1h-2v-1h-1v-2l-1-1v-1h-1 1l-1-1v-3l-1-1v1-1h-1l-1-1v1-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h-1v-1l-1-1 1-1v-1l1-1v-1h1v-1h-1v-2l1-2v-1h1' },

  'PE': { name: 'Pernambuco', path: 'M554 199.5h-1 2v2-1h-1v1-1 3h1v1l-1 1v1-1h-1 1v2l-1 1v2l-1 2v2h-1v2l-1 1h-2l-1-1h-3l-1 1h-1v-1h-1l-1 1h-2v1l-2 1v1l-1 1h-3v1h-1l-2-1-1 1-1 1-1-1h-1l-1-1-3-2v-1h-1v-1h-1l-1 1h-1v-2h-1v2h-1v1h-1v1h-2v1l-1 1h-1v-2h-1v-1h1v-1h-3v-2h-1v1l-1 1-1-2h-1v-1h-3v-1h-3v-2h-2l-2 1h-1l-1 1 1 1h-2l-1 1v2h-1v1h-4l-1 3v1h-2v1h-3v-3h-1v-1h-1v-4h-1v-1h-2v-1h-2v1h-1v-1h1l1-1v-1h1v-1h1v-1h1v1l1-1v-1 1h1v-1l1-1h1v-1h1v-5h-1v-3l-1-1v-1h9l1-1h1l3 1h1v1h1l1 1h1v1l1 1h2v2h2v-1h1v-1h1v-1h2v1h1v1h1v-1h1v1-1h1v1h1-1v1h1v-1h1v1-1h1v1-1h2v-1h1v-1h1l1-1 2-1h1v-1l1-1v1-1h1l1-1 1 1 1 1h1v1l-1 1h-1v3h-1v2h-1v1h1v-1h1v1h1-1v1h1v2h1l1 1v-1h2l1-1h1v-3h3v-2h1l1 1v-1h1v1-1h1v1h1v-1h1v1-1h1v-1 1h1v-1h2l1-1 1-1v-1h2v-1h4v1h1v1h1' },

  'PI': { name: 'Piauí', path: 'M463 136.5h1v1h1l1 1h-1 1-1 4l-1 1h1v-1h1v1h1v2l-2 2v5h1v2h1v3l1 1 1 1v3h-1v1h-1v3h1v3h1v2l1 1v1h-1v1h1v1h1v4l1 1v4l1 2v3l1 1v1l1 1h2l1 1v1l-1 2-1 2v3h-2v1l1 1v3h1v5h-1v1h-1l-1 1v1h-1v-1 1l-1 1v-1h-1v1h-1v1h-1v1l-1 1h-1l-1 1v1h-1v1h-1v1h-2v2h-1v1h-4v1h-3v1h-1v1h-1v1l-1-1v1h-5v-1h-1v-1h-2v1-1h-2v1h-1v-2h-1v1h-1l-1-1v2h-3l1 1v1l1 1v2h1l-1 1v3h-1v1l-1 1v2h-2l-1 2h-1v1h-1v-1h-3l-1 1h-1v1h-1v1l-1 1h-5v-1h-2v-1l-1-1v-1h-1v-2l-1-1h-3l-2-1v-2l1-1v-3l1-1h-1v-3h1v-2h-1v-2h-1l1-1h-1v-5h1v-1h1v-1l1-1v-2l1-1v-1l1-1v-4l1-1v-1l1-1h1v-1h2l1-1h3v-1h2l1-1h1v-1l1-1h1v-1h2v-1l1-1v-1h1v-1l1 1v-1h1v-1 1h1v-1h4v1h1v1h1v-1h5l1-1v-1h1v-4h1-1v-1l-1-1-1-1h-1v-1h1l-1-1v-4l1-1 1-1v-1h1v-1h1v-4h-1v-3h-1v-2h1v-3h-1v-2h-1l1-1h1v-2l1-1h1v-2h1v-2l1-1v-1h1v-1 1h1l1-1h2l1-2h1v-1h1v-1h1v-1h1v-1l-1-1v-2' },

  'RJ': { name: 'Rio de Janeiro', path: 'M475 384.5v1l-1 1v1h-1l1 1v3l1 2v1h-1l-1 1-2 1h-1l-2 1h-1l-1 1-1 1h-1v1h-1v1h-1v1h-1v2h1v1l1-1v1h-1v1h-1v2-1h-9v1h-4v-1h-1v-2h1v-2h-1v1h-2v2h1v2h-4l-1 1h-6 2v-1 1h2l1-1h1-2v-1h-2v-1 1h-2v1-1l-1 1h-1v1-1 1h-1v-1h-1v-1h-1v1h-2v1-1h-1v1h-1v2h1v1-1h1v1h1-1v1h-3v-1l-1-1v-1h1v-2h1v-1h1v-1h4l1-1v-1h1v-2h-3l-1 1h-1v-1 1h-1v-2h-1v-1h-1v-1h2v-1h2l1-1h2v1l1-1h1v-1h2l1-1h6l1-1h3v1h-1 2v-1h1l1-1h2l1-1h1l1-1h1v-1h2v-1h-1v-2h1v-2l1-1v-3h1v-2h2v-2h3v4h1v1h2v1h7v1' },

  'RN': { name: 'Rio Grande do Norte', path: 'M523 163.5v1h1l1 1h3l1 1h1v1h3-1 6l1-1h1l2 1h4v1h1v1h1v2l1 1v1h1-1l1 1v3h1l-1 1h1v3h-1l1 1v-1 1h1v2h1v1h-1v1l-1-1h-2v1h-1v-1h-3l-1-1h-1l-1 1h-2l-1-1v1l-1-1h-2v-1h-2l-1 1v2h1v1h-2v1h1v2h-1v1h-3l1-1v-1h-1l-1-1h-2v1h-3v-1h-3v-2l1-1v-2h1l1-1v-1h1v-2h-2v1h-4l-1 1h-1v2h-1v1h-2v1-1l-1 1h-3l-1-1h-1v-1 1h-2 1v-3h1v-1h1v-1 1h1l1-1 2-2v-2l1-1v-1l1-1 2-3 1-2v-1l2-1 4-2' },

  'RS': { name: 'Rio Grande do Sul', path: 'M268 511.5h-2v1l-1-1v1l-1 1v1h-5v-1h-1l1-1h1l1-2h1v-2l1-1v-1h2l1-1 1-1v-1h1l1-1v-2h1l1-1v-2h1v-1h2v-2h1v-2h1v-1h1l1-1 1-1v-2h2v-2h2v1l1-1h-1v-1h-1v-1h1l1-1h2v-1h1v-1h1v-1h1v-1h3v-1h-1 1l1-1h1v-2l1-1v1l1-1h1v-1h1v1l1-1v-1h1v1h1v-1 1h1v-2l1-1 1 1 1-2h2v-1 1h3v1-1h2v-1h1l1-1v1h1v1h-1 2v-1l1 1v-1h1v1-1 1h1-1v1h1v-1h2v1h5v1l1-1v1-1h1v1h1v-1 1h2v1h1-1l1 1h1v1-1 1h2v-1h1v1h1v1h2v1h2v2h2v1h1v1h1v1h1v2h1l1 1v1h1v2h4v1h8v2h-1v1h-1v1h-1v4l-1 1v1-1h-1v1l-1 1v1l1 1h1v-1h-1v-1h3l1 1h1v1l-1 1-1 2-1 1-1 2v1l-2 6-1 2-1 2-3 6-2 3-1 1-1 1-2 3-2 1-2 2-3 3-4 2-2 3-1 1v-1l1-1v-2l-1-1 1-1 1 1h2l-1-1h3l1-2 1-1h1-1v-1l1-1v1h1l1-1 1-1v-5h2v1h1v-1h-1l1-1v-2h1l1-1h1v-7h1v2h1v-4h-1v1h-2v1h-1v-1l-1 1v1h-1v-3h-1v1h-1v-1h-1v-3l-1 1h1-1v2h1v2-1h1v1h1v1h-2v6h-1v-1h1l-1-1v-1h-1v3h1v1h-2v3h1l-2 1h-1v2h-3v1h-1l-1 1v2l1 1h-1v1-2h-1v1h1v1h-1l-1 1h-1v1h1-1v1h1v1h1-2v2h1-1 2-1v1h1v-1 2l-2 1-2 4v3l-1 1-2 5v1l-1 1-1 2-2 1-2 2-1 1-1 1-2 1v-1h-2v-2l1-2-1-3v-1l1-1v-1l2-1v-1l1-1h1v-1h1v-1l-1-1h-1v-1h-2l-1-1-1-1v-1h-1v-2l-1-1v-2h-1l-1-1-1-1h-1v-1h-1v1h-1l-1-1v-1h-1l-1-1v-1h-1v-2h-1v-1h-3l-1-1-1-1h-1v-1 1h-1l-1-1h-1v-2h-1v-2l-1-1h-1v-1h-2v1h-1l-1 1-1 1h-2v-4l-1-1v-1h-1v-1h-1v-1l-1-1h-1v-1l-1-1h-1v-1h-1v-1h-1l-1-1-1-1' },

  'RO': { name: 'Rondônia', path: 'M157 236.5h1v-2h1l-1-1v-5l-1-1h-1v1h-1v1h-1v-1h-4l-1 1-1-1v1l-1-1v1h-3v1h-3l-3-1 1-1h1l1-1h1l1-1 1-1v-2h2l1 1h1l1-1h1v1h1v1h1v1l1-1h1v-1l1-1 1 1h1v-1l1-1h1v-1h1v2l1 1 1-1v-1h1v-1h1-1v-2h1v-1h5v-1l1 1v-1h4v-2l-1-1h2l1-1v-2h-1v-1h1v-1h3v-2h2v-2h10l1 1h1v2h1v2h1v-1l1 1h1v3h2v2h2v1h2v-1h1v-1h2v1h1v1h1v1l-1 1v4h-1v1h1v2l1 1v1h-1v2h1v1h-1v5l1 1v7l-1 1h15v2h1v-1h1v1h3v1h1v4h-1v1h-1v4h1v1h1v1l1 1v4h1l-1 1-1 2-1 1v2l-1 1h-1v1h-1v2l-1 1v1l-1 1v1h-1l-2 2h-1v1l-1-1h-1v-1h-2v-1h-1v1h-10v-1h-1v-1h-1v-1h-1v-2h-4v-1h-2l-1-1h-2v-1h-1l-1-1h-1v-2h-1v-1h-1v1h-3v-1h-1v-1h-1l-1-1h-3v1h-2v-1h-1l-1 1v-1h-3v-1h-1v-2h-1l-1-1h-1v-1 1-1h-1v-1h-3v-3l-1-1h-1v1-3h-1v-1h-1v-2l-1-1 1-1h-1v-1h1v-4h-1v-4h-1 1l-1-1h1v-1' },

  'RR': { name: 'Roraima', path: 'M225 32.5h1v2h1l1 1h-1v4l-1 1v1h-1v1h5v1h1v3h1v2h1v2h-1v1h1-1v1h-1v1h-1l-1 1v1h1l-1 1h1v1h-1v2h-1 1-1v3l-1 1v3h1v2l1 1h-1v1h1l1 1h1v2h-1l1 1v1h-1v1h1l1 1-1 1h2l1 1v1h1v1h1v1h1v1h4l1 15-12-1-3 1h-1v1l-1 1v1h-1v2h-1v3h-1v2l1 1v1h-2v1h-2v1h-1v-1h-1v-2h-1v-1h-2l-1-1h-2v1h-2l-1 1v1h-1v6l-1 1v2h-1v-1h-1l-1 1v-1l-1-1v-1h-1v-1h-1l-1-1-1-1h-1l-1-1v-1h-1v-2 1h1l1-1v-2h-1v-3h-1v-2h-1v-7h1v-2l-1-1v-1h1v-4l-1-1v-1l-1-2v-1l-1-1-1-1v-2h1v-3h-1v-1h-4v-2h-3l-1-1v-1l1-1h-7l-1-1h-1v-4l-1-2h-1v-2h-1v-5h1v-1l-1-1-1-1h-1v-1l-2-1v-1h-1v-1l-1-1v-1h-1v-1h2v2h1l3-1 1 1h2v3h2v-1h4l1 1h1v-1h3v1l1 1 1 1 1 1v1h3v-1h1v-2h-1v-3h3v-1h1v-1h1l3 1h1l1-1h1v1l1-1 1-1h3l1-1v-1h2v-1h4l1-1v-1l1-1h1l1-1 1-1 1-1-1-1v-2h-1 5l1-1h1' },

  'SC': { name: 'Santa Catarina', path: 'M309 459.5v-3l1-1h2l1-1h1l1 1h1v1h7v1h6v1h1v1h2l1 1h2l1-1v1h3v1l1-1h1v-4l1-1h1v-1h2v1-1 1h1l1-1h1v-1h1v-1h1v-1h2v1h1v-1h1v1h1v-1l1 1 1-1h2v1h1l1 1 1 1h2v-1h1l1-1h1v-1h4l4-1v1h1-1v1h1v2h-2v-1h-1v-1 2h1-1 1l-1 1h1v1h1v3l-1 1v1h1v1h1v1h-1v2h1v2h-1l1 1v-1h1v2l-1-1h1-1l-1 1v1h1v2h-1v2h1-1v3h1v2h-1v1h1v1h-1v3h-1v2l-1 1v-2h-1v2h1v1h1-1v1h-2v1l-1 1-4 3-3 3-2 3v-1h-1l-1-1h-3v1h1v1h-1l-1-1v-1l1-1v-1h1v1-1l1-1v-4h1v-1h1v-1h1v-2h-8v-1h-4v-2h-1v-1l-1-1h-1v-2h-1v-1h-1v-1h-1v-1h-2v-2h-2v-1h-2v-1h-1v-1h-1v1h-2v-1 1-1h-1l-1-1h1-1v-1h-2v-1 1h-1v-1h-1v1-1l-1 1v-1h-5v-1h-2v1h-1v-1h1-1v-1 1-1h-1v1l-1-1v1h-2 1v-1h-1v-1l-1 1h-1v1h-2v1-1h-3 1v-2l1-1v-3l-1-1h1v-2' },

  'SP': { name: 'São Paulo', path: 'M426 413.5h-3v1h-1v1h-2v1-1 1h-2v1h-1v3h-2v-1h-6v1h-2v1h-1 1v-1h1l-1 1v1h-2 1v-1h-1v-1h-1v1h-1 1v1h1l-1 1v-1l-1 1h-1l-2 2h-2l-1 1-1 1v1l-1 1-1 1-3 2h-2v1h-1l-2 2h-1v1l-1 1h-1 1-1 1v1-1h1l-1 2-1 1h-1v1-1h1-2v-3h-2v-1h-2v2l-1-1v-3h1v-1l-1-1h-5l-1-1v1h-4v-2h1v-1h-1l1-1v-2h-1v-2h-1v-1h-1v-2h-1v-4h-1v-6l-1-1v-1h-2v-1h-1 1-1v-1h-11v-1h-1v-1h-3l-1-1h-1v-1h-3v1h-1v-1h-2l-1-1v1h-1v-1h-1l-1-1h-1v1h-1v1h-1v-1l-1 1-1-1h-1v1l-1-1h-6v1h-1v1h-1l1-1 1-1v-1l1-1h1l1-1h1v-1h1l1-1h1v-1h1l1-1v-2l1-1h1v-2h1l1-1h-1v-2h2v-1l1-1v-3l1-1 1-1v-1l1-1v-2l1-1v-1h1v-1h1v-1l1-1h1l2-1 1-1v-2h1l1-1 2-1h1l1-1v-1h2l1 1 4 1h7l1 1h2l-1 1v1h1v2h2v-2h1l1 1v3h1v-4h8v-2h1v2h2v-2h1v2h1v-2h3v1l1-1h1v-1 1h1v1l1 1h1v5h1l1 1v2h-1v1l-1 1v1h1v1l1 1v2h1v3h2v-1h3v1h2v2h-1v1h-1v6h-1 1l1 1h-1v1l-1 1 1 1v1h1v1h2v2h-1l1 1h1v2h3-1 3v-1h1v1h1v-1h1v-1h-1l1-1v-1h1v1h-1 3v-1h1v1h1l1-1h1v-1h1l1-1h4v1h1v2h1v-1 1h1l1-1h3v2h-1v1l-1 1h-4v1h-1v1h-1v2h-1v1l1 1v1h1' },

  'SE': { name: 'Sergipe', path: 'M534 238.5h-2v1h-1l-2 1-1 1-1 1v1l-1 1-1 2h-1 1-1v-1 1-1h-1 1v2l-1 1v1l-1 1h-1l1-1v-1h1v-1h-1l1 1h-1v-1 1l-1 1v1-1h-1v1h1v1h-1l-1 1-1-1v1h-2v-1l-1-1h-1l-1-1h1l-1-1h1v-1h-2v-2l-1-1v-1h-1v-1l1-1h4l1-1v-9h-1v-1h-1l-1-2v-3h2v1h2l1 1 1 1h3l1 1v1h2l1 1h1v2h1v1h2v1h1v-1 1h1v2h2v1' },

  'TO': { name: 'Tocantins', path: 'M413 236.5h-1v1h-1v1h-2v1h-1v1h-1l-1 1h-1v1h1v1l-1 1h-1v2l-1 1-1 1v2h1v1h3l1 1h1v1l-1 1h-1v2h1v-1 1h1v1l-1 1h-1v1h-1v5h2v2l-1 1v1l-1 1h-2l-1 1h-1l-1 1-1 1h-4l-2 2h-3v1h-1v-2h-1v-1l-1 1v1l1 1v1h-1l-2-1-1-1h-2v-1h-1v-1h-1l-1 1v1h-2l-1-1h-1v2h-1v1h-1v-7h-1l-1-1h-1v-2 1h-1l-3 4v3h-3l-2-1-3-1v-1h-1l-3-1v-2l1-1v-2l1-1v-1h-1l-1 1h-1v1l-1 1v1h-1v2h-1v-1h-1v-8l-1-2h1v-2h-1v-2l1-1v-1h-1v-4h1v-6h1v-3h1v-3h1v-3l1-1v-1l1-1v-1l1-1v-1l1-1v-3l1-1v-1h1v-1l1-1h1v-2h1v-1h2v-1l1-1v-1l1-1v-1l1-1v-1l1-2v-1h1v-4h-1l-1-1-1-1v-2l2-2 1-1v-2l-1-2h1v-1l2-1 2-1h1l1-1h1v-3h1v-1h2v-2l1-1h1v-1h-1v-1h1v-2h-1v-1h2v-1h1-1v-1h-1l-1-1v-1h-4l-1-1h2v-2h3l2 1h4v2h3v1h2v4h1v10h-1v6l-1 1-1 1h-1v1h1v1-1h2v2h-1v1h1v1h2v1h1v1h-1 1v1h1v1l1 1v1h3v-1h5v5h-1l1 1h-3l-1 1h-1v3h-1v1l1 1h-1v1h-1v1h-1v1h3v1l1 1v2h1l1 1h1v3h-1v1l1 1h1v2l1 1v1h1v1h1v-1h1v1h1l1 1h1l2 1h1' }
};

const cafes = [
  { id: 1, name: 'Cafeteria', city: 'São Paulo', state: 'SP', address: 'Rua, 123', phone: '(11) ****-****', hours: '7:00 - 22:00' },
  { id: 2, name: 'Cafeteria', city: 'Rio de Janeiro', state: 'RJ', address: 'Av. , 456', phone: '(21) ****-****', hours: '6:30 - 23:00' },
  { id: 3, name: 'Cafeteria', city: 'Belo Horizonte', state: 'MG', address: 'Rua, 789', phone: '(31) ****-****', hours: '6:00 - 21:00' },
  { id: 4, name: 'Cafeteria', city: 'Porto Alegre', state: 'RS', address: 'Rua , 321', phone: '(51) ****-****', hours: '7:30 - 20:00' },
  { id: 5, name: 'Cafeteria', city: 'Salvador', state: 'BA', address: 'Av., 654', phone: '(71) ****-****', hours: '8:00 - 22:00' },
  { id: 6, name: 'Cafeteria', city: 'São Paulo', state: 'SP', address: 'Rua, 123', phone: '(11) ****-****', hours: '7:00 - 22:00' },
];

let selectedState = null;

const svg = document.getElementById('brazil-map');
const info = document.getElementById("info");

const COLORS = {
  UNITS: '#059669',
  SELECTED: '#dc2626',
  NO_UNITS: '#6b7280'
};

const getStateLocations = (stateCode) => cafes.filter(cafe => cafe.state === stateCode);
const hasLocations = (stateCode) => getStateLocations(stateCode).length > 0;

const getStateColor = (code) => {
  if (selectedState === code) return COLORS.SELECTED;
  if (hasLocations(code)) return COLORS.UNITS;
  return COLORS.NO_UNITS;
};

const handleStateClick = (stateCode) => {
  selectedState = selectedState === stateCode ? null : stateCode;
  renderAll();
};

const createMapSvg = () => {
  svg.innerHTML = '';

  Object.entries(brazilStates).forEach(([code, state]) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', state.path);
    path.setAttribute("fill", getStateColor(code));
    path.classList.add("cursor:pointer", "transition:all|0.2s", "stroke:#fff", "stroke-width:0.3", "stroke-width:0.5:hover", "fill:#ea580c:hover");
    path.setAttribute('title', state.name);

    path.addEventListener('click', () => handleStateClick(code));
    svg.appendChild(path);
  });
};

const createLocationsPanel = () => {
  info.innerHTML = '';
  const panelContainer = document.createElement('div');
  panelContainer.className = "box-shadow:layered-shadow p:1rem r:0.25rem flex flex-col gap:1rem";

  if (selectedState) {
    const stateName = brazilStates[selectedState]?.name;
    const selectedStateLocations = getStateLocations(selectedState);

    let html = `
            <div class="flex gap:10px">
                <img class="w:20px" src="src/assets/svgs/location.svg" alt="">
                <h4 class="font-weight:500 color:#000">${stateName}</h4>
            </div>
            <div class="flex flex-col gap:10px">
        `;

    if (selectedStateLocations.length > 0) {
      selectedStateLocations.forEach(location => {
        html += `
                    <div class="p:1rem border:1px|solid|#e2e8f0 r:0.5rem flex gap:0.75rem ai:flex-start">
                        <img class="w:20px color:${COLORS.UNITS}" src="src/assets/svgs/local-cafe.svg" alt="" style="flex-shrink: 0;">
                        <div class="flex-grow:1">
                            <h4 class="font-weight:600 m:0 color:#0f172a">${location.name}</h4>
                            <p class="f:0.875rem color:#64748b m:0">${location.address}</p>
                            <p class="f:0.875rem color:#64748b m:0">${location.city}</p>
                            ${location.phone ? `<p class="f:0.875rem color:#64748b m:0.25rem|0|0|0">📞 ${location.phone}</p>` : ''}
                            ${location.hours ? `
                                <span class="f:0.75rem font-weight:500 bg:#f3f4f6 color:#0f172a r:0.375rem p:0.25rem|0.5rem block w:fit-content m:0.5rem|0|0|0">
                                    🕒 ${location.hours}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                `;
      });
    } else {
      html += `
                <div class="f:0.9rem text:center color:#64748b p:2rem|0">
                    <img class="w:48px m:0" src="src/assets/svgs/local-cafe.svg" alt="">
                    <p class="m:0.75rem|0|0|0">Em breve neste estado!</p>
                </div>
            `;
    }

    html += `</div>`;
    panelContainer.innerHTML = html;
  } else {
    const statesWithLocations = Object.entries(brazilStates)
      .filter(([code]) => hasLocations(code))
      .map(([code, state]) => `
                <span data-state-code="${code}" class="badge-link flex ai:center border:1px|solid|#e2e8f0 r:0.375rem p:0.25rem|0.5rem f:0.875rem font-weight:500 color:#0f172a cursor:pointer transition:all|0.15s bg:#f0fdf4:hover border:#a7f3d0:hover">
                    ${state.name}
                </span>
            `).join('');

    panelContainer.innerHTML = `
            <div class="flex gap:10px ">
                <img class="w:20px" src="src/assets/svgs/local-cafe.svg" alt="">
                <h4 class="font-weight:500">Nossas Cafeterias</h4>
            </div>
            <div class="flex flex-col jc:center ai:center opacity:60% p:1rem">
                <img class="w:48px m:0" src="src/assets/svgs/location.svg" alt="">
                <p class="f:1rem m:0.25rem|0|0.5rem|0">Selecione um estado no mapa</p>
                <p class="f:0.8rem m:0">para ver nossas unidades</p>
            </div>
            <div class="flex flex-col gap:0.5rem border-top:1px|solid|#e2e8f0 p-top:1rem">
                <h4 class="font-weight:600 f:0.875rem color:#0f172a">Estados com cafeterias:</h4>
                <div class="flex flex-wrap:wrap gap:0.5rem">
                    ${statesWithLocations}
                </div>
            </div>
        `;

    panelContainer.querySelectorAll('.badge-link').forEach(badge => {
      badge.addEventListener('click', () => {
        const code = badge.getAttribute('data-state-code');
        handleStateClick(code);
      });
    });
  }

  info.appendChild(panelContainer);
};

const renderAll = () => {
  createMapSvg();
  createLocationsPanel();
};

renderAll()


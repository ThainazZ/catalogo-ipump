

interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const menu: MenuItem[] = [


  // HIPERTROFIA
  {
    id: 1,
    title: '100% PURE WHEY',
    category: 'Whey Protein',
    price: 150,
    img: './assets/whey/probrefil.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 3,
    title: 'WHEY 100% ZERO LACTOSE',
    category: 'Whey Protein',
    price: 215,
    img:'./assets/whey/whey_zero_lactose.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 4,
    title: '100% WHEY',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/whey_max_refil.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 5,
    title: 'ISO WHEY (ISOLADO)',
    category: 'Whey Protein',
    price: 279,
    img:'./assets/whey/iso_whey_max.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 6,
    title: 'TOP WHEY 3W',
    category: 'Whey Protein',
    price: 189,
    img:'./assets/whey/top_whey_3w.webp',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 7,
    title: '3W TOP TASTE',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/3whey_toptaste.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 8,
    title: '3WHEY DELICIOUS',
    category: 'Whey Protein',
    price: 150.00,
    img:'./assets/whey/3whey_delicious.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 9,
    title: 'WHEY 100% DUX',
    category: 'Whey Protein',
    price: 199.00,
    img:'./assets/whey/whey_dux_pote.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 10,
    title: 'WHEY 100% PURE',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/whey_integralmedica.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 11,
    title: 'MY WHEY CONCENTRADO',
    category: 'Whey Protein',
    price: 129.90,
    img:'./assets/whey/my_whey_im.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 12,
    title: 'CREATINA MAX TITANIUM',
    category: 'Creatinas',
    price: 145.00,
    img:'./assets/creatina/creatina_300g_max.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 13,
    title: 'CREATINA INTEGRALMEDICA',
    category: 'Creatinas',
    price: 145.00,
    img:'./assets/creatina/creatina_300g_integral.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 14,
    title: 'CREATINA FTW',
    category: 'Creatinas',
    price: 135.00,
    img:'./assets/creatina/creatina_300g_ftw.webp',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 15,
    title: 'CREATINA TURBO 300G',
    category: 'Creatinas',
    price: 120.00,
    img:'./assets/creatina/creatina_turbo_300g.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 16,
    title: 'CREATINA UNIVERSAL 200G',
    category: 'Creatinas',
    price: 130.00,
    img:'./assets/creatina/creatina_universal.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 17,
    title: 'CREAPURE DARKNESS 200G',
    category: 'Creatinas',
    price: 140.00,
    img:'./assets/creatina/creatina_darkness.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },


  // EMAGRECIMENTO
  {
    id: 18,
    title: 'THERMOCRAZY 60CAPS',
    category: 'Emagrecimento',
    price: 89.90,
    img:'./assets/termo/thermocrazy.webp',
    desc: `Boiled or fried yam and egg sauce is a usual suspect on the tables of Nigerians. It is quite filling and can last you the whole day, if not careful. Egg sauce is an easy-to-prepare Nigerian sauce made by sautéing tomatoes and eggs. `,
  },
  {
    id: 19,
    title: 'DERRETE 60CAPS',
    category: 'Emagrecimento',
    price: 69.90,
    img:'./assets/termo/derrete_evorox.png',
    desc: `Boiled or fried yam and egg sauce is a usual suspect on the tables of Nigerians. It is quite filling and can last you the whole day, if not careful. Egg sauce is an easy-to-prepare Nigerian sauce made by sautéing tomatoes and eggs. `,
  },
  {
    id: 20,
    title: 'MOROSIL 30CAPS',
    category: 'Emagrecimento',
    price: 87.90,
    img:'./assets/termo/morosil.png',
    desc: `Boiled or fried yam and egg sauce is a usual suspect on the tables of Nigerians. It is quite filling and can last you the whole day, if not careful. Egg sauce is an easy-to-prepare Nigerian sauce made by sautéing tomatoes and eggs. `,
  },



  // GANHO DE MASSA
  {
    id: 21,
    title: 'DELICIOUS MASS',
    category: 'Ganho de massa',
    price: 115.00,
    img:'./assets/hiper/delicious_mass.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 22,
    title: 'SUPERGAINERS',
    category: 'Ganho de massa',
    price: 129.00,
    img:'./assets/hiper/supergainers.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },

  // PRE TREINO
  {
    id: 23,
    title: 'HÓRUS',
    category: 'Pré-Treinos',
    price: 129.00,
    img:'./assets/pre_treino/horus.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 24,
    title: 'EPIC 300G',
    category: 'Pré-Treinos',
    price: 126.90,
    img:'./assets/pre_treino/epic.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 25,
    title: 'FRITZ',
    category: 'Pré-Treinos',
    price: 109.90,
    img:'./assets/pre_treino/fritz.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 26,
    title: 'DIABO VERDE',
    category: 'Pré-Treinos',
    price: 124.90,
    img:'./assets/pre_treino/diabo_verde.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 27,
    title: 'NUCLEAR RUSH 100G',
    category: 'Pré-Treinos',
    price: 59.90,
    img:'./assets/pre_treino/nuclear_rush.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },


  // SAUDE E BEM-ESTAR
  {
    id: 28,
    title: 'ÔMEGA 3 DUX 120CAPS',
    category: 'Saúde e bem-estar',
    price: 109.90,
    img:'./assets/saude/omega_dux.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 29,
    title: 'ÔMEGA 3 VITAFOR 120CAPS',
    category: 'Saúde e bem-estar',
    price: 99.90,
    img:'./assets/saude/omega_vitafor.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 30,
    title: 'NAC 60CAPS VITAFOR',
    category: 'Saúde e bem-estar',
    price: 75.00,
    img:'./assets/saude/nac_vitafor.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 31,
    title: 'MELATONINA 30ML',
    category: 'Saúde e bem-estar',
    price: 35.00,
    img:'./assets/saude/melatonina_uniao.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 32,
    title: 'GOOD NIGHT 450MG',
    category: 'Saúde e bem-estar',
    price: 75.00,
    img:'./assets/saude/good_night.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 33,
    title: 'VITAMINA D 5000ui',
    category: 'Saúde e bem-estar',
    price: 35.00,
    img:'./assets/saude/vitaminad.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
  {
    id: 34,
    title: 'MULTIVITAMÍNICO DUX',
    category: 'Saúde e bem-estar',
    price: 80.00,
    img:'./assets/saude/multivi_dux.png',
    desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
  },
];

export default menu;

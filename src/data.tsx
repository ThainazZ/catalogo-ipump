

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
    desc: `Esse é o Whey Protein pioneiro em qualidade e excelência no mercado brasileiro! Conta com sabores super variados e deliciosos.`,
  },
  {
    id: 3,
    title: 'WHEY 100% ZERO LACTOSE',
    category: 'Whey Protein',
    price: 215,
    img:'./assets/whey/whey_zero_lactose.png',
    desc: `A melhor opção de custo-benefício e qualidade, indicado para a população intolerante a lactose.`,
  },
  {
    id: 4,
    title: '100% WHEY',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/whey_max_refil.png',
    desc: `Referência entre os wheys protein e o preferido do Renato Cariani! Incrível sabor e dissolubilidade.`,
  },
  {
    id: 5,
    title: 'ISO WHEY (ISOLADO)',
    category: 'Whey Protein',
    price: 279,
    img:'./assets/whey/iso_whey_max.png',
    desc: `Possui um nível ainda maior de pureza, zero lactose e super indicado para você que tem intolerância ou está em uma dieta muito rigorosa.`,
  },
  {
    id: 6,
    title: 'TOP WHEY 3W',
    category: 'Whey Protein',
    price: 189,
    img:'./assets/whey/top_whey_3w.webp',
    desc: `O melhor para você que busca performance e não abre mão da melhor qualidade disponível. Alta concentração de pureza e valor nutricional!`,
  },
  {
    id: 7,
    title: '3W TOP TASTE',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/3whey_toptaste.png',
    desc: `O mais querido e procurado na Iron Pump! Possui sabores maravilhosos e um custo-benefício ainda maior, com altíssima quantidade de proteína por dose.`,
  },
  {
    id: 8,
    title: '3WHEY DELICIOUS',
    category: 'Whey Protein',
    price: 150.00,
    img:'./assets/whey/3whey_delicious.png',
    desc: `Feito e elaborado para você que valoriza o sabor e "gostosura" das suas refeições, além de contar com excelente concentração proteica.`,
  },
  {
    id: 9,
    title: 'WHEY 100% DUX',
    category: 'Whey Protein',
    price: 199.00,
    img:'./assets/whey/whey_dux_pote.png',
    desc: `Apresenta a melhor qualidade do mercado brasileiro. O sabor, qualidade e excelência desse Whey Protein ficam marcados para sempre em você.`,
  },
  {
    id: 10,
    title: 'WHEY 100% PURE',
    category: 'Whey Protein',
    price: 145.00,
    img:'./assets/whey/whey_integralmedica.png',
    desc: `É a proteína mais vendida do Brasil por vários anos consecutivos, e com muita razão! Muito gostoso e ideal para você manter uma alimentação prática e saudável.`,
  },
  {
    id: 11,
    title: 'MY WHEY CONCENTRADO',
    category: 'Whey Protein',
    price: 129.90,
    img:'./assets/whey/my_whey_im.png',
    desc: `Excelente custo-benefício e super indicado para você que preza pelo sabor e qualidade e não abre mão de economizar!`,
  },
  {
    id: 12,
    title: 'CREATINA MAX TITANIUM',
    category: 'Creatinas',
    price: 145.00,
    img:'./assets/creatina/creatina_300g_max.png',
    desc: `Entrega grande qualidade e resultados; `,
  },
  {
    id: 13,
    title: 'CREATINA INTEGRALMEDICA',
    category: 'Creatinas',
    price: 145.00,
    img:'./assets/creatina/creatina_300g_integral.png',
    desc: `A vermelhinha que todo mundo conhece e adora!`,
  },
  {
    id: 14,
    title: 'CREATINA FTW',
    category: 'Creatinas',
    price: 135.00,
    img:'./assets/creatina/creatina_300g_ftw.webp',
    desc: `Cada dia mais notável no mercado e apresenta excelente qualidade por um custo-benefício encantador.`,
  },
  {
    id: 15,
    title: 'CREATINA TURBO 300G',
    category: 'Creatinas',
    price: 120.00,
    img:'./assets/creatina/creatina_turbo_300g.png',
    desc: `Possui adição de carboidratos em sua fórmula para aumentar a eficácia da creatina e te ajudar a economizar.`,
  },
  {
    id: 16,
    title: 'CREATINA UNIVERSAL 200G',
    category: 'Creatinas',
    price: 130.00,
    img:'./assets/creatina/creatina_universal.png',
    desc: `Essa é a creatina mais vendida do MUNDO! Altíssima qualidade, incomparável!`,
  },
  {
    id: 17,
    title: 'CREAPURE DARKNESS 200G',
    category: 'Creatinas',
    price: 140.00,
    img:'./assets/creatina/creatina_darkness.png',
    desc: `Selo CREAPURE diretamente da indústria alemã, para você que preza a qualidade absoluta na suplementação.`,
  },


  // EMAGRECIMENTO
  {
    id: 18,
    title: 'THERMOCRAZY 60CAPS',
    category: 'Emagrecimento',
    price: 89.90,
    img:'./assets/termo/thermocrazy.webp',
    desc: `Vem ser crazy e potencializar o seu emagrecimento! Recomendamos ingerir 1 cápsula ao dia. Para atletas é possível consumir até 2 cápsulas, que fornecem 400 mg de cafeína. Composição incrível que te fornece até Cromo para auxiliar na saciedade. `,
  },
  {
    id: 19,
    title: 'DERRETE 60CAPS',
    category: 'Emagrecimento',
    price: 69.90,
    img:'./assets/termo/derrete_evorox.png',
    desc: `Cumpre mais do que promete. DERRETE tudo! Conta até com Pimenta Branca para acelerar o processo de queima de gordura, e excelente concentração de cafeína, CoenzimaQ10 e tudo o que você precisa para acelerar o metabolismo e emagrecer com saúde. `,
  },
  {
    id: 20,
    title: 'MOROSIL 30CAPS',
    category: 'Emagrecimento',
    price: 87.90,
    img:'./assets/termo/morosil.png',
    desc: `Morosil é um tratamento que atua ajudando a perda de medidas, especialmente na região abdominal. Seus bioativos atuam melhorando a hipóxia e inflamação ocasionada pela hipertrofia dos adipócitos! `,
  },



  // GANHO DE MASSA
  {
    id: 21,
    title: 'DELICIOUS MASS',
    category: 'Ganho de massa',
    price: 115.00,
    img:'./assets/hiper/delicious_mass.png',
    desc: `Delicioso, completo com 3g de creatina por dose, e ideal para te auxiliar no ganho de massa, que só é alcançado ao atingir superávit calórico, com uma alimentação planejada e rica em calorias, onde o Delicious Mass vai auxiliar com muita praticidade e sabor.`,
  },
  {
    id: 22,
    title: 'SUPERGAINERS',
    category: 'Ganho de massa',
    price: 129.00,
    img:'./assets/hiper/supergainers.png',
    desc: `Um dos melhores hipercalóricos do mercado, líder da marca Max Titanium por entregar uma composição pensada em manter a qualidade do sabor e a concentração de creatina e proteínas.`,
  },

  // PRE TREINO
  {
    id: 23,
    title: 'HÓRUS',
    category: 'Pré-Treinos',
    price: 129.00,
    img:'./assets/pre_treino/horus.png',
    desc: `Pré-treino ideal para você ter bastante energia sem acelerar muito, mantendo o seu bem-estar diário. Conta com 150mg de cafeína!`,
  },
  {
    id: 24,
    title: 'EPIC 300G',
    category: 'Pré-Treinos',
    price: 126.90,
    img:'./assets/pre_treino/epic.png',
    desc: `Composição incrível para você ter muita disposição, conta com 200mg de cafeína por dose!`,
  },
  {
    id: 25,
    title: 'FRITZ',
    category: 'Pré-Treinos',
    price: 109.90,
    img:'./assets/pre_treino/fritz.png',
    desc: `Entrega alto poder vasodilatador, possibilitando aqueles pumps insaaaaanos!! Sucesso de custo-benefício e qualidade.`,
  },
  {
    id: 26,
    title: 'DIABO VERDE',
    category: 'Pré-Treinos',
    price: 124.90,
    img:'./assets/pre_treino/diabo_verde.png',
    desc: `É um dos mais completos da categoria e conta até com 3g de creatina por dose, sendo 200mg de cafeína por dose.`,
  },
  {
    id: 27,
    title: 'NUCLEAR RUSH 100G',
    category: 'Pré-Treinos',
    price: 59.90,
    img:'./assets/pre_treino/nuclear_rush.png',
    desc: `MUITO INTENSO! Esse aqui vai te possibilitar ter os melhores (e mais insanos) treinos da sua vida! Conta com 400mg de cafeína por dose.`,
  },


  // SAUDE E BEM-ESTAR
  {
    id: 28,
    title: 'ÔMEGA 3 DUX 120CAPS',
    category: 'Saúde e bem-estar',
    price: 109.90,
    img:'./assets/saude/omega_dux.png',
    desc: `Qualidade premium com uma concentração impecável de Ômega 3. Apenas 2 cápsulas diárias.`,
  },
  {
    id: 29,
    title: 'ÔMEGA 3 VITAFOR 120CAPS',
    category: 'Saúde e bem-estar',
    price: 99.90,
    img:'./assets/saude/omega_vitafor.png',
    desc: `Um dos ômegas mais recomendados por nutricionistas, entrega toda a qualidade da família Vitafor. 3 cápsulas diárias.`,
  },
  {
    id: 30,
    title: 'NAC 60CAPS VITAFOR',
    category: 'Saúde e bem-estar',
    price: 60.00,
    img:'./assets/saude/nac_vitafor.png',
    desc: `O NAC® (N-acetil L-cisteína), é de origem vegetal. Esse aminoácido tem relação com funções importantes do organismo, contribuindo para o equilíbrio e proteção do corpo.`,
  },
  {
    id: 31,
    title: 'MELATONINA 30ML',
    category: 'Saúde e bem-estar',
    price: 35.00,
    img:'./assets/saude/melatonina_uniao.png',
    desc: `Esse hormônio representa grandes mudanças para a sua rotina de sono e ainda mais mudanças para a sua qualidade de vida. Apenas 1 gota diária.`,
  },
  {
    id: 32,
    title: 'GOOD NIGHT 450MG',
    category: 'Saúde e bem-estar',
    price: 75.00,
    img:'./assets/saude/good_night.png',
    desc: `O Good Night é um composto fantástico de elementos essenciais para a manutenção do seu ciclo circardiano, seu bem-estar e a sua saúde.`,
  },
  {
    id: 33,
    title: 'VITAMINA D 5000ui',
    category: 'Saúde e bem-estar',
    price: 35.00,
    img:'./assets/saude/vitaminad.png',
    desc: `É um composto essencial ao corpo, desenvolvido para cuidar da sua saúde e dar o reforço que você precisa nos cuidados com o seu corpo. Possui uma fórmula pensada para trazer os melhores resultados de forma 100% segura e eficaz, utilizando produtos naturais e não agressivos ao corpo.`,
  },
  {
    id: 34,
    title: 'MULTIVITAMÍNICO DUX',
    category: 'Saúde e bem-estar',
    price: 80.00,
    img:'./assets/saude/multivi_dux.png',
    desc: `O Multivitamínio Dux possui uma fórmula especial que fornece micronutrientes cientificamente selecionados para atender as necessidades específicas do corpo humano, em uma única cápsula ultra concentrada.`,
  },
];

export default menu;

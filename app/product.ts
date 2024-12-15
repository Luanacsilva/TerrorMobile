// Importando as imagens para os produtos
const azilyum_image= require("@/assets/images/Azilyum.jpg");
const bruxa_image=  require('@/assets/images/Bruxa.jpg');
const esperanca_image = require('@/assets/images/Esperança.jpg');
const catherine_image = require('@/assets/images/Catherine.jpg');
const nenem_image = require('@/assets/images/Nenem.jpg');
const paz_image = require('@/assets/images/Paz.jpg');
const misterio_image = require('@/assets/images/Ansiedade.jpg');
const luar_image = require('@/assets/images/Etherium.jpg');
const horizonte_image = require('@/assets/images/Eu.jpg');
const chamas_image = require('@/assets/images/Tranquilidade.jpg');

// Atualizando o tipo Product para incluir a descrição
import { ImageSourcePropType } from 'react-native';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string; // Novo campo de descrição
  image: ImageSourcePropType;
};

// Atualizando os produtos para incluir o campo 'description'
const products: Product[] = [
  {
    id: 1,
    name: "Azilyum",
    price: 1200.0,
    quantity: 3,
    description: "Explore o coração sombrio de um asilo esquecido pelo tempo, onde cada corredor ressoa com os gritos de antigos residentes enlouquecidos. Esta obra captura o peso esmagador do confinamento e a insanidade que se esconde nas sombras.",
    image: azilyum_image,
  },
  {
    id: 2,
    name: "Bruxa",
    price: 950.0,
    quantity: 5,
    description: "Um corredor interminável e uma presença maligna à espreita. A obra captura o momento exato em que o pacto com as trevas é selado, com detalhes que evocam o misticismo e o terror do sobrenatural.",
    image: bruxa_image,
  },
  {
    id: 3,
    name: "Esperança",
    price: 700.0,
    quantity: 7,
    description: "Uma figura solitária e misteriosa em um campo desolado, cercada por corvos que parecem anunciar o fim da inocência e o nascimento do desespero. Uma visão que provoca angústia e fascinação em iguais medidas.",
    image: esperanca_image,
  },
  {
    id: 4,
    name: "Catherine",
    price: 800.0,
    quantity: 4,
    description: "O rosto distorcido de um espírito vingativo que carrega as cicatrizes de uma história trágica. Um retrato visceral de sofrimento eterno, com detalhes que evocam tanto empatia quanto medo.",
    image: catherine_image,
  },
  {
    id: 5,
    name: "Nenem",
    price: 4000.0,
    quantity: 1,
    description: "Uma boneca abandonada em uma floresta desolada, cujos olhos brilham com uma presença demoníaca. Seu sorriso macabro transforma a inocência em pesadelo, tornando-se uma obra que fica gravada na memória.",
    image: nenem_image,
  },
  {
    id: 6,
    name: "Paz",
    price: 850.0,
    quantity: 8,
    description: "Um caminho sombrio em uma floresta onde o silêncio é quebrado por sussurros invisíveis. A busca por paz é envolta em sombras que parecem vivas, provocando uma sensação de inquietação crescente.",
    image: paz_image,
  },
  {
    id: 7,
    name: "Mistério do Lago",
    price: 1100.0,
    quantity: 5,
    description: "A calmaria de um lago enevoado esconde segredos terríveis. Espíritos inquietos vagam pelas margens, condenados a uma eternidade de sofrimento. 'Mistério do Lago' é um portal para o desconhecido.",
    image: misterio_image,
  },
  {
    id: 8,
    name: "Luar",
    price: 1050.0,
    quantity: 4,
    description: "Criaturas emergem das trevas à luz da lua cheia, trazendo o terror ao mundo silencioso da noite. 'Luar' é uma peça que captura o momento em que o desconhecido se torna uma ameaça tangível.",
    image: luar_image,
  },
  {
    id: 9,
    name: "Horizonte",
    price: 1300.0,
    quantity: 6,
    description: "Uma jornada perturbadora que desafia os limites da compreensão humana. 'Horizonte' apresenta um cenário onde cada passo revela horrores mais profundos, levando os espectadores a uma espiral de angústia.",
    image: horizonte_image,
  },
  {
    id: 10,
    name: "Chamas",
    price: 1050.0,
    quantity: 3,
    description: "Um observador solitário sentado em uma casa abandonada, encarando a lua cheia enquanto galhos retorcidos parecem se mover na escuridão. 'Chamas' transforma serenidade em um sentimento de pavor iminente.",
    image: chamas_image,
  },
];

// Função para editar um produto
const editProduct = (id: number, updatedProduct: Partial<Product>) => {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...updatedProduct, // Atualizando apenas os campos fornecidos
    };
    console.log(`Obra com ID ${id} foi atualizada com sucesso!`);
  } else {
    console.log(`Obra com ID ${id} não encontrada.`);
  }
};

// Exemplo de uso da função editProduct
editProduct(1, {
  name: "Azilyum - Nova Edição",
  description: "Edição revisada e ampliada da obra 'Azilyum', trazendo mais profundidade ao tema de confinamento e loucura.",
});

export { Product, products };

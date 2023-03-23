import imagemProduto1 from '../../image/51yKJQZpUqL._AC_SL1000_.jpg';
import imagemProduto2 from '../../image/carrroPacote.jpg';
import imagemProduto3 from '../../image/controlePs4.jpg';
import imagemProduto4 from '../../image/ps4+god of war .jpg';

import { Produto } from '../Produto/Produto';

export function ListaProduto() {
  return (
    <>
      <section className="Lista">
        <Produto 
          nome="Pacote 5 Carros Sortidos, Hot Wheels, Mattel - não é possível escolher as cores"
          imagem={imagemProduto1}
          descricao="Carros em escala 1:64 ,Modelos realistas às grandes máquinas sobre rodas. Produto sortido: ao compra-lo, você poderá receber qualquer um dos modelos exibidos"
          preco="R$ 41,90"
        ></Produto>
        <Produto
          nome="Ps4 - Controle sem fio Dualshock Ps4 - Camuflado Verde"
          imagem={imagemProduto3}
          descricao="Revolucionário, intuitivo e preciso: o controle sem fio DualShock 4 para o sistema PlayStation 4 define esta geração de jogos, combinando recursos revolucionários e conforto com controles precisos e intuitivos."
          preco="R$ 259,90"
        ></Produto>
        <Produto
          nome="PlayStation®4 + God of War Ragnarök"
          imagem={imagemProduto4}
          descricao="PlayStation4 - Jogos incríveis e entretenimiento sem fim. Os jogos mais incríveis estão no PS4, com 1TB de armazenamento. O console PS4 oferece excelente poder de jogabilidade, entretenimento incrível tecnologia HDR vibrante."
          preco="R$ 2.699,00"
        ></Produto>
      <Produto 
          nome="Pacote 5 Carros Sortidos, Hot Wheels, Mattel - não é possível escolher as cores"
          imagem={imagemProduto1}
          descricao="Carros em escala 1:64 ,Modelos realistas às grandes máquinas sobre rodas. Produto sortido: ao compra-lo, você poderá receber qualquer um dos modelos exibidos"
          preco="R$ 41,90"
        ></Produto>
        <Produto
          nome="Ps4 - Controle sem fio Dualshock Ps4 - Camuflado Verde"
          imagem={imagemProduto3}
          descricao="Revolucionário, intuitivo e preciso: o controle sem fio DualShock 4 para o sistema PlayStation 4 define esta geração de jogos, combinando recursos revolucionários e conforto com controles precisos e intuitivos."
          preco="R$ 259,90"
        ></Produto>
        <Produto
          nome="PlayStation®4 + God of War Ragnarök"
          imagem={imagemProduto4}
          descricao="PlayStation4 - Jogos incríveis e entretenimiento sem fim. Os jogos mais incríveis estão no PS4, com 1TB de armazenamento. O console PS4 oferece excelente poder de jogabilidade, entretenimento incrível tecnologia HDR vibrante."
          preco="R$ 2.699,00"
        ></Produto>
       
      </section>
    </>
  );
}

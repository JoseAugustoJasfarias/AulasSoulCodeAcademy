import { useForm } from 'react-hook-form';

export function SuperHero() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    alert(`Nome: ${data.name} \n Poder : ${data.power} \n Fraqueza : ${data.weakness} \n História:  ${data.history}  `);
  }

  return (
    <>
      <div className="superHeroi">
        <h1>Cadastro de Super Heroi</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="nome">Nome</label>
          <br />
          <input type="text" id="name" {...register('name')} />
          <br />

          <label htmlFor="poder">Poder</label>
          <br />
          <input type="text" id="power" {...register('power')} />
          <br />

          <label htmlFor="fraqueza">Fraqueza</label>
          <br />
          <input type="text" id="weakness" {...register('weakness')} />
          <br />

          <label htmlFor="historia">Historia</label>
          <br />
          <textarea type="text" id="history" {...register('history')} />
          <br />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

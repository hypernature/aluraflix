import CampoTexto from './components/campotexto';
import CampoColor from './components/campocolor';
import ButtonForm from './components/buttonform';

function NuevaCategoria() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Nueva Categoría</h2>
      <form>
        <CampoTexto />
        <CampoColor />
        <ButtonForm />
      </form>
    </div>
  );
}

export default NuevaCategoria;

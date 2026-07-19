import CampoTexto from './components/campotexto';
import ListaOpciones from './components/listaopciones';
import ButtonForm from './components/buttonform';

function NuevoVideo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Nuevo Video</h2>
      <form>
        <CampoTexto />
        <ListaOpciones />
        <ButtonForm />
      </form>
    </div>
  );
}

export default NuevoVideo;

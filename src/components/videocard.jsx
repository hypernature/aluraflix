import { Link } from 'react-router-dom'
import { datos } from '../data/archivos_iniciales'

const VideoCards = ({ url, color, nombreCategoria }) => {
    const colorCard = {
        borderBottom: `5px solid ${color}`,
        borderRadius: '4px 4px 0 0',
        boxShadow: '0px 0px 17px 8px rgba(0,0,0,0.14) inset',
        width: '432px',
        height: '260px',
        backgroundColor: '#000000'
    }
    return (
        <>
            {
                datos.videos.map(video => {
                    const { id, urlVideo, urlImagen, categoria } = video
                    if(categoria === nombreCategoria){
                        return (
                        <Link to={`${urlVideo}`} target="_blank" rel="noopener noreferrer" key={id}>
                            <div className='videocard' style={ colorCard } key={id}>
                                <img src={`${urlImagen}`} alt="Imagen video card" key={id}/>
                            </div>
                        </Link>
                        );
                    }
                    return null;
                })
            }
        </>
    )
}

export default VideoCards

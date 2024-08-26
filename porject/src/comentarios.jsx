import './comentarios.css'

export function Comentario ({img,nombre,mensaje}) {
    return(
        <div className="comment">
            <div className="profile">
                <img className='profile-img' src={img} alt={nombre} />
            </div>
            <div className="comment-details">
                <h3 className="client-name">{nombre}</h3>
                <p className="comment-message">{mensaje}</p>
            </div>
        </div>
    );
}

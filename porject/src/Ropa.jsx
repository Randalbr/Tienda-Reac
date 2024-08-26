
import './ropa.css'  

export function Ropa ({nombre,precio,img}) {
return(
    <>
    <div className="product-card">
        <img className='product-image' src={img} alt={nombre} />
        <div className="product-info">
            <h2 className="product-name">{nombre}</h2>
            <p className="product-price">${precio}</p>
        </div>
    </div>
    </>
);
}
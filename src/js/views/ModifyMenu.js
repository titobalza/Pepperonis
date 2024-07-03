import React , {useState} from 'react';
import AddProduct from '../component/AddProduct';
import DeleteProduct from '../component/DeleteProduct';
import icono from "../../img/fondo.png";


const ModifyMenu = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);

  return (
    <div className="modifmenu" style={{
      backgroundImage: `url(${icono})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>  
        
      <div>
        <button className="button-admin" onClick={() => setShowAddProduct(!showAddProduct)}>
          Agregar Producto {showAddProduct ? '▲' : '▼'}
        </button>
        {showAddProduct && <AddProduct />}
      </div>
      
      <div>
        <button className="button-admin" onClick={() => setShowDeleteProduct(!showDeleteProduct)}>
          Eliminar Producto {showDeleteProduct ? '▲' : '▼'}
        </button>
        {showDeleteProduct && <DeleteProduct />}
      </div>
    </div>
  );
};

export default ModifyMenu;


  import React , {useState} from 'react';
  import AddProduct from '../component/AddProduct';
  import DeleteProduct from '../component/DeleteProduct';
  import ModifyProduct from '../component/ModifyProduct';
  import icono from "../../img/fondo.png";


  const ModifyMenu = () => {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showDeleteProduct, setShowDeleteProduct] = useState(false);
    const [showModifyProduct, setShowModifyProduct] = useState(false);
  
    return (
      <div
        className="modifmenu"
        style={{
          backgroundImage: `url(${icono})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container py-5">
          <div className="row mb-3">
            <div className="col-12">
              <button
                className="btn btn-primary w-100"
                onClick={() => setShowAddProduct(!showAddProduct)}
              >
                Agregar Producto {showAddProduct ? '▲' : '▼'}
              </button>
              {showAddProduct && <AddProduct />}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <button
                className="btn btn-danger w-100"
                onClick={() => setShowDeleteProduct(!showDeleteProduct)}
              >
                Eliminar Producto {showDeleteProduct ? '▲' : '▼'}
              </button>
              {showDeleteProduct && <DeleteProduct />}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <button
                className="btn btn-warning w-100"
                onClick={() => setShowModifyProduct(!showModifyProduct)}
              >
                Editar Producto {showModifyProduct ? '▲' : '▼'}
              </button>
              {showModifyProduct && <ModifyProduct />}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModifyMenu;
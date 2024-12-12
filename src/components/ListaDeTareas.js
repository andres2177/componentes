import React from 'react';

const ListaDeTareas = () => {
    const tareas = ['Aprender React', 'Construir una aplicación', 'Publicarla en GitHub'];

    return (
        <div>
            <h3>Mis Tareas:</h3>
            <ul>
               <li>crear proyecto con react</li>
               <li>realizar  componentes</li>
               <li>subir a GitHub</li>
               
            </ul>
        </div>
    );
};

export default ListaDeTareas;

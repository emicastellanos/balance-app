import React from 'react'
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="pa4">
            <table className="fixed_header" cellSpacing="0">
            <thead>
                <tr>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">Monto $</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">Descripcion</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">Fecha</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 ">Realizado</th>
                </tr>
            </thead>
            <tbody className="lh-copy" style={{overflow:'auto', height:'500px', display:'block'}}>
                { items.map ( (item, index) => <Item item={item} key={index}/> ) }
            </tbody>
            
            </table>
        </div>
    );
}

export default ItemList;
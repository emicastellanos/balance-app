import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Table from 'react-bootstrap/Table'

// className="fw6 bb b--black-20 tl pb3 pr3 "
const ItemList = ({items}) => {
    return (
        <div className="pa4 shadow-5 table-wrapper-scroll-y">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th style={{"width":"20%"}}>Monto $</th>
                        <th style={{"width":"50%"}}>Descripcion</th>
                        <th style={{"width":"20%"}}>Fecha</th>
                        <th style={{"width":"10%"}}>Realizado</th>
                    </tr>
                </thead>
                <tbody className="lh-copy">
                    { items.map ( (item, index) => <Item item={item} key={index}/> ) }
                </tbody>
            </Table>
        </div>
    );
}

export default ItemList;
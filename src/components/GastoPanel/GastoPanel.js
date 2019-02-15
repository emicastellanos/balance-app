import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GastoPanel = ({today, dateUpdate, confirmClick,onChange}) => {
    return (
        <article className="br2 ma4 ba dark-gray b--black-10 mv4 fl w-20 w-50-m w-25-l mw5 shadow-5 bg-near-white" style={{"height":"fit-content"}}>
            <form className="pa4 pb2" >
                <div className="measure">
                    <label htmlFor="description" className="ph1 f5 b db mb2 navy">Descripcion</label>
                    <input id="desc_input" name="desc" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={onChange}/>
                    <label htmlFor="amount" className="ph1 f5 b db mb2 navy">Monto</label>
                    <input id="amount_input" name="amount" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="number" onChange={onChange}/>
                    <label htmlFor="category" className="ph1 f5 b db mb2 navy">Categoria</label>
                    <input id="category_input" name="category" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={onChange}/>
                    <label htmlFor="date" className="ph1 f5 b db mb2 navy">Fecha</label>
                    <DatePicker id="date_input" name="date" className="input-reset ba b--black-20 pa2 mb2 db w-100" dateFormat="dd/MM/yyyy" selected={today} onChange={dateUpdate}/>
                </div>
                <div className="ph4 p">
                    <p className="f5 link dim br2 ph3 pv2 pb2 mb2 white bg-navy dib pointer" type="submit" onClick={confirmClick}>Confirmar</p>
                </div>
            </form>
        </article>
    );
}

export default GastoPanel;
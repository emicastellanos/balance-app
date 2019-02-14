import React from 'react'

const Item = ({item}) => {
    return (
            <tr>
                <td className="pv3 pr3 bb b--black-20">{item.amount}</td>
                <td className="pv3 pr3 bb b--black-20">{item.desc}</td>
                <td className="pv3 pr3 bb b--black-20">{item.date}</td>
                <td className="pv3 pr3 bb b--black-20">{item.done}</td>
            </tr>
    )
}

export default Item;
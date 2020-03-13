import React from "react";
import './todo.css'

function output(props) {  

    return (
        <table>
            <tr className="row-table">
                <td>name</td>
                <td>delete</td>
                <td>edit</td>
            </tr>
            {
                props.datavalue && props.datavalue.length > 0 && props.datavalue.map((l, index) => {
                return <tr>
                        <td key={index}>{l.name}</td>
                        <td className="row-table"  onClick={() => props.delete(l.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                        <td className="row-table"  onClick={() => props.edit(l.id)}><i class="fa fa-pencil" aria-hidden="true"></i>    </td>
                    </tr>
                })
            }
         
        </table>
    );
}

export default output;
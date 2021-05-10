import React from 'react'

export default (props) =>(
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th>SKU</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {   
                props.produtos.map( (produto, index) =>{
                    return (
                        <tr key={index}>
                            <th>{produto.nome}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>{produto.sku}</th>
                            <th>
                                <button onClick={ () => props.editarAction(produto.sku) } 
                                    className="btn btn-primary"> Editar</button>
                                <button onClick={ () => props.deletarAction(produto.sku) } style={{ marginLeft:'1em' }}
                                    className="btn btn-danger">Excluir</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
);
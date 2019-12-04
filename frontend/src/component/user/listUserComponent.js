import React, { Component } from 'react';
import ApiServe from "../../service/api";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.removeUser = this.removeUser.bind(this);
        this.inserirUser = this.inserirUser.bind(this);
        this.attUser = this.attUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiServe.fetchUsers()
            .then((res) => {
                this.setState({ users: res.data.result })
            });
    }
    removeUser(userId) {
        ApiServe.deleteUser(userId)
            .then(res => {
                this.setState({ message: 'Usuario removido!.' });
                this.setState({ users: this.state.users.filter(user => user.id !== userId) });
            })
    }
    inserirUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }
    attUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <button className="btn btn-danger" onClick={() => this.inserirUser()}>Adicionar</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th className="hidden">Id</th> */}
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Endereço</th>
                            <th>Telefone</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.nome}</td>
                                        <td>{user.cpf}</td>
                                        <td>{user.email}</td>
                                        <td>{user.endereco}</td>
                                        <td>{user.telefone}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.removeUser(user.id)}> Remove</button>
                                            <button className="btn btn-success" onClick={() => this.attUser(user.id)}> Editar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ListUserComponent;
import React, { Component } from 'react';
import ResourceService from '../services/ResourceService';

class ListResourceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resources: {}
        }
        this.addResource = this.addResource.bind(this);
    }

    componentDidMount() {
        console.log("After list emp component intialized called automtically")
        ResourceService.getResources().then((res) => {
            console.log(res);
            this.setState({ resources: res.data });
        });

    }

    addResource() {
        this.props.history.push('/addresource/_add');
    }

    getallresourcesby(id) {
        this.props.history.push(`/getallresourcesbyid/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Resources List </h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addResource}> Add Resource </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Resource Name </th>
                                <th> Description  </th>
                                <th> Category </th>
                                <th> Type </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr key={this.state.resources.resId}>
                                <td> {this.state.resources.title} </td>
                                <td> {this.state.resources.description} </td>
                                <td> {this.state.resources.category} </td>
                                <td> {this.state.resources.price} </td>
                                <td> {this.state.resources.empId} </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListResourceComponent;
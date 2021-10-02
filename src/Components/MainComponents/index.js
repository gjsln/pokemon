import React, { Component } from 'react';
import MainLayout from './layout';
import { fetchDataList } from '../../services/pokeman.services';

const pagination = {
  newPageNumber: 0,
  rowsPerPage: 10,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: [],
      count: 0,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleDataSorting = this.handleDataSorting.bind(this);
    this.handleDataSearch = this.handleDataSearch.bind(this);
  }

  componentDidMount() {
    fetchDataList(pagination, (data) => {
      this.setState({ count: data.count, pokemonDetails: data.details });
    });
    this.handleDataSorting('name');
  }

  handleDataSearch(value) {
    if (value !== '') {
      let filterData = this.state.pokemonDetails.filter(
        (e) => e.name.toLowerCase().search(value.toLowerCase()) !== -1
      );
      this.setState({ pokemonDetails: filterData });
    } else {
      fetchDataList(pagination, (data) => {
        this.setState({ count: data.count, pokemonDetails: data.details });
      });
    }
  }

  handlePageChange(pagination) {
    fetchDataList(pagination, (data) => {
      this.setState({ count: data.count, pokemonDetails: data.details });
    });
    this.handleDataSorting('name');
  }

  handleDataSorting(data) {
    let sortval = this.state.pokemonDetails.sort((a, b) =>
      a[data] > b[data] ? 1 : -1
    );
    this.setState({ pokemonDetails: sortval });
  }

  render() {
    return (
      <MainLayout
        {...this.props}
        {...this.state}
        handlePageChange={this.handlePageChange}
        handleDataSorting={this.handleDataSorting}
        handleDataSearch={this.handleDataSearch}
      />
    );
  }
}

export default Main;

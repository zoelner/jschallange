import React, { Component } from 'react';
import { FaTrash, FaFilm, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import api from '../../services/api';

class Home extends Component {
  state = {
    newMovie: '',
    movies: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({
      newMovie: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const { newMovie } = this.state;

    const response = await api.get(`?apikey=eebcf44c&t=${newMovie}`);

    const data = {
      title: response.data.Title,
    };

    this.setState(prevState => ({
      movies: [...prevState.movies, data],
      newMovie: '',
      loading: false,
    }));
  };

  render() {
    const { newMovie, movies, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaFilm />
          Filmes
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Procurar Filme"
            value={newMovie}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {movies.map(movie => (
            <li key={movie.title}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
                  Detalhes
                </Link>
                <FaTrash size={14} color="#9966ff" />
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Home;

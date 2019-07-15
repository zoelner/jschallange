import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Header, RatingList } from './styles';

export default class Movie extends Component {
  state = {
    movie: {},
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const movieName = decodeURIComponent(match.params.movie);

    const movie = await api.get(`?apikey=eebcf44c&t=${movieName}`);

    this.setState({
      movie: movie.data,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Header>
          <Link to="/">Voltar aos filmes</Link>
          <img src={movie.Poster} alt={movie.Title} />
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
        </Header>

        <RatingList>
          {movie.Ratings.map(rating => (
            <li key={String(rating.id)}>
              <div>
                <strong>{rating.Source}</strong>
                <p>{rating.Value}</p>
              </div>
            </li>
          ))}
        </RatingList>
      </Container>
    );
  }
}

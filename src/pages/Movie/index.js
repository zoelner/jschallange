import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Header, RatingList, TableDetails } from './styles';

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
          <div>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              <h1>
                {movie.Title} - {movie.Year}
              </h1>
              <p>{movie.Plot}</p>
            </div>
          </div>

          <TableDetails>
            <table>
              <tbody>
                <tr>
                  <th>Diretor</th>
                  <td>{movie.Director}</td>
                </tr>
                <tr>
                  <th>Estrelas</th>
                  <td>{movie.Actors}</td>
                </tr>
                <tr>
                  <th>Lançamento</th>
                  <td>{movie.Released}</td>
                </tr>
                <tr>
                  <th>Duração</th>
                  <td>{movie.Runtime}</td>
                </tr>
              </tbody>
            </table>
          </TableDetails>
        </Header>

        <RatingList>
          <h1> Rating </h1>
          {movie.Ratings.map(rating => (
            <li key={String(rating.Source)}>
              <div>
                <strong>
                  {rating.Source}
                  <span>{rating.Value}</span>
                </strong>
              </div>
            </li>
          ))}
        </RatingList>
      </Container>
    );
  }
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import { Header, RatingList, TableDetails, Loading } from './styles';
import { addMovieRequest } from '../../store/modules/movie/actions';

export default function Movie({ match }) {
  const movieName = decodeURIComponent(match.params.movie);
  const movie = useSelector(state =>
    state.movie.data.find(m => m.Title === movieName)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      dispatch(addMovieRequest(movieName));
    }
  });

  if (!movie) {
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

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie: PropTypes.string,
    }),
  }).isRequired,
};

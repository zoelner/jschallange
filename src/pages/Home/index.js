import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash, FaFilm, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import { addMovieRequest } from '../../store/modules/movie/actions';

export default function Home({ movie }) {
  const [newMovie, setNewMovie] = useState('');
  const movies = useSelector(state => state.movie.data);
  const loading = useSelector(state => state.movie.loading);

  const dispatch = useDispatch();

  function handleInputChange(e) {
    setNewMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addMovieRequest(newMovie));
    setNewMovie('');
  }

  return (
    <Container>
      <h1>
        <FaFilm />
        Filmes
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procurar Filme"
          value={newMovie}
          onChange={handleInputChange}
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
          <li key={movie.Title}>
            <span>{movie.Title}</span>
            <div>
              <Link to={`/movie/${encodeURIComponent(movie.Title)}`}>
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

import React, { Component } from 'react';
import { getMovies } from '../services/fakeMoviesService';
import Liked from './common/Liked';
import Pagination from './common/Pagination';



class Movies extends Component {

    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };


    //imperative vs declarative
    handleDelete(movie) {
        this.setState( prevState => {
            const movies = prevState.movies.filter(m => m._id !== movie._id);
            return {
                movies
            }
        });
    }

    handleLike = (index) => {
        const filme = [...this.state.movies]
        filme[index].liked = !filme[index].liked
        this.setState({movies: filme})

        const array = new Array(5).fill(null);
        console.log(array)
    }

    render() {
        
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>

                     { this.state.movies.map( (movie, index) => (
                        <tr key={movie._id}>
                            <td>{ movie.title }</td>
                            <td>{ movie.genre.name }</td>
                            <td>{ movie.numberInStock }</td>
                            <td>{ movie.dailyRentalRate } </td>
                            <td />
                            <td />
                            <td>
                            <Liked gabriel={() => this.handleLike(index)} liked={movie.liked} />
                            </td>
                            <td>
                                <button onClick={ () => this.handleDelete(movie) }
                                        className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                     ))}

                    </tbody>
                </table>
                <Pagination pageSize={this.state.pageSize} currentPage={this.state.currentPage} itemsCount={this.state.movies.length} onPageChange={this.pageChangedHandler}/>
            </div>
        );
    }
}

export default Movies;

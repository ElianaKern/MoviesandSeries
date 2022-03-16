/*
return (
    <header>
      <Slider {...propsCarrousel}>
        {peliculas.map((pelicula) => (
            <div className="container-img-header">
              <div className='modal-pelicula'>
                  <h3>{pelicula.title}</h3>
                  <p>{pelicula.overview}</p>
                  <Link to={`/movie/${pelicula.id}`}>
                      <button><span>Ver mas...</span></button>
                  </Link>
              </div>
              <img
                src={`${urlBaseImg}w500/${pelicula.backdrop_path}`}
                className="img-carrousel"
                key={pelicula.id}
              />  
            </div>
        ))}
      </Slider>
    </header>
  );
  

  /*
 <img
            src={`${urlBaseImg}original/${pelicula.backdrop_path}`}
            className="img-carrousel"
            key={pelicula.id}
          />





  @import '../utilidades-styles/variables';

header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .slick-slider {
    width: 100%;
    .slick-arrow {
      background-color: $color-secundario;
      border-radius: 10px;
    }
    .slick-arrow:hover {
      box-shadow: $box-shadow-secundario;
    }
    .slick-list {
      height: 600px;
      .slick-active {
        width: 100%;
      }
    }
    .slick-dots {
      .slick-active {
        button::before {
          color: $color-secundario;
        }
      }
    }
    .modal-pelicula {
        width: 200px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transform: translate(50px, 300px);
        background-color: rgba(0, 255, 255, 0.294);
      }
      .img-corrousel {
        width: 100%;
        height: 100%;
      }
  }
}


 <div className="container-img-header">
            <div className="modal-pelicula">
              <h3>{pelicula.title}</h3>
              <p>{pelicula.overview}</p>
              <Link to={`/movie/${pelicula.id}`}>
                <button>
                  <span>Ver mas...</span>
                </button>
              </Link>
            </div>
            <img
              src={`${urlBaseImg}w500/${pelicula.backdrop_path}`}
              className="img-carrousel"
              key={pelicula.id}
            />
          </div>

*/
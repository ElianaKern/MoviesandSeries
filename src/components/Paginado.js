import * as ImIcons from 'react-icons/im';
import "../styles/components-styles/_Paginado.scss"

const Paginado = ({ handleClickPrev, handleClickNext, page, totalPages, handleClickFirstPage, handleClickLastPage }) => {
  
    return (
      <div className='paginado'>
        <button onClick={handleClickFirstPage} disabled={page === 1}><ImIcons.ImFirst/></button>
        <button
          onClick={handleClickPrev}
          disabled={page === 1}
        ><ImIcons.ImPrevious2/></button>
        <span>{page}</span>
        <button
          onClick={handleClickNext}
          disabled={totalPages > 500 ? page === 500 : page == totalPages}
        ><ImIcons.ImNext2/></button>
  
        <button 
         onClick={() => handleClickLastPage(totalPages > 500 ? 500 : totalPages)}
         disabled={totalPages > 500 ? page === 500 : page == totalPages}
         ><ImIcons.ImLast/></button>
      </div>
    )
  }
  
  export default Paginado
import React from 'react'
import Head from './Head'

const Viewbook = () => {

    var booklist={"title":"wings of fire","price":"200","author":"APJ"}
  return (
    <div>

        <Head/>
        <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Name

    
            </label>
            <label for="" className="form-label">{booklist.title}

    
</label>
            <label for="" className="form-label">Price{booklist.price}
            </label>

                </div>
                </div>
     </div>


    </div>
    </div>
  )
}

export default Viewbook
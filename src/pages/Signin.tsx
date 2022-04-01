import React from 'react'



const Signin = () => {
  return (
    <div>
        <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="text" readOnly className="form-control" />
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" />
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </div>

  )
}

export default Signin
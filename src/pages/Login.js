import React from 'react';


function Login() {
    

    return (
        <div>
            <div className="row my-4">
                <div className="col-md-6">
                    <div className="text-end h1">Connexion</div>
                </div>
                <div className="col-md-6 text-end"><button href='/inscription' className="btn btn-primary">Créer nouveau compte</button></div>
            </div>
            <div className="row my-3">
                <div className="col-md-8 mx-auto">
                  
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" name="" id="" placeholder='Email' className="form-control" />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="" className="form-label " >Mot de passe</label>
                            <input  type="password" name="" id="" placeholder='Mot de passe' className="form-control" />
        
                        </div>
                        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Se Connecter</button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login

import { Link } from 'react-router-dom'

function Inscription() {

    return (
        <div>
        <div className="row my-8">
            <div className="col-md-3">
                <div className="h1">S’inscrire</div>
                <div className="h6">C’est rapide et facile.</div>
            </div>
            <div className="col-md-6 text-end"><Link to="/login" className="btn btn-primary">Connexion</Link></div>
        </div>
        <div className="form-group">
        <label htmlFor="" className="form-label " ></label>
                            <input type="text" name="" id="" placeholder='Nom' className="form-control" />
                            <label htmlFor="" className="form-label " ></label>
                            <input  type="text" name="" id="" placeholder='Nom de famille' className="form-control" />
                            <label htmlFor="" className="form-label " ></label>
                            <input  type="text" name="" id="" placeholder='E-mail' className="form-control" />
                            <label htmlFor="" className="form-label " ></label>
                            <input  type="text" name="" id="" placeholder='Nouveau mot de passe' className="form-control" />
                            <label htmlFor="" className="form-label " ></label>
                            <input  type="text" name="" id="" placeholder='Confirmer le mot de passe' className="form-control" />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="" className="form-label " >Date de naissance ?</label>
                            <input  type="date" name="" id="" className="form-control" />
                            <label htmlFor="" className="form-label " >Genre :</label><br></br>
                            <ul><li><label htmlFor="" className="form-label " > Homme</label>&nbsp;&nbsp;
                            <input  type="radio" name="" id="Homme" className="" />&nbsp;&nbsp;&nbsp;&nbsp;
                           <label htmlFor="" className="form-label " > Femme</label>&nbsp;&nbsp;
                            <input  type="radio" name="" id="Homme" className="" /></li></ul>
                            <div className="col-md-6 text-end"><Link to="/article/create" className="btn btn-primary">S'inscrire</Link></div>
                        </div>

        

                

            
        </div>
   
    )
}

export default Inscription
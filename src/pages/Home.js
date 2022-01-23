import React from 'react'
import img4 from '../assets/images/img4.JPG'
import img2 from '../assets/images/img2.JPG'
import img6 from '../assets/images/img6.jpeg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpeg'
import ba from '../assets/images/ba.jpeg'
import bd from '../assets/images/bd.jpeg'
import cd from '../assets/images/cd.jpeg'
import avis1 from '../assets/images/avis1.jpeg'
import avis2 from '../assets/images/avis2.jpeg'
import avis3 from '../assets/images/avis3.jpeg'


function Home() {
  return (
      <div>
              <h1 class="text-center">Bienvenue</h1>
          <p className="text-justify">Atb’s jewelry c’est un petit business de bijoux qui sont fais à la main , c’est le paradis des femmes . Vous pouvez trouver toute genre de bijoux qui vont matcher avec vos tenue , du doré , de l’argenté , classe , casual …
Chaque génération du petit au plus grand , trouveras ce qu’elle voudra de chez nous , il vous suffit juste de nous contacter et de personaliser votre bijoux .
          </p>
          <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
  

</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={img2} class="d-block w-100" alt="..." height="400px"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>⚜️Collier en acier inoxydable trempé or et Jadeites</h5>
      <p>
        ⚜️Livraison partout au Maroc 🇲🇦.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src={img4}  class="d-block w-100" alt="..."height="400px"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>⚜️Boucles avec créoles en acier inoxydable trempé or et pierres zircons.</h5>
      <p>⚜️Livraison partout au Maroc 🇲🇦.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src={img7}  class="d-block w-100" alt="..."height="400px"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>⚜️Boucles d’oreilles en acier inoxydable trempé or et zircons</h5>
      <p> ⚜️Livraison partout au Maroc 🇲🇦.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src={img6}  class="d-block w-100" alt="..."height="400px"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>⚜️Bague en acier inoxydable trempé or et pierres naturelles TURQUOISE</h5>
      <p> ⚜️Livraison partout au Maroc 🇲🇦.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src={img8}  class="d-block w-100" alt="..."height="400px"/>
    <div class="carousel-caption d-none d-md-block">
      <h5>⚜️Collier en pierres naturelles Turquoise et acier inoxydable trempé </h5>
      <p> ⚜️Livraison partout au Maroc 🇲🇦.</p>
    </div>
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
<br></br>
<h5 class="text-center">Les meilleurs produits</h5>
<br></br>
<div className="card-group">
<div className="card">
  <img className="card-img-top" src={ba} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Bague en Argenté</h5>
    <p className="card-text">Bague serpent argenté en acier inoxydable , résistante à l’eau et au parfum , et elle est ajustable à votre doigt</p>
  </div>
  <div className="card-footer">
  <div  class="text-center">

  <small className="text-muted"><p>80 Dirhams</p></small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <small className="text-muted"><button href="" className="btn btn-outline-dark">Ajouter au panier</button></small>
    </div>
  </div>
</div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className="card">
  <img className="card-img-top" src={cd} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Colier Dorée</h5>
    <p className="card-text">Collier doré en acier , ajustable à votre cou avec une touche de simplicité</p>
  </div>
  <div className="card-footer">
  <div  class="text-center">

  <small className="text-muted"><p>100 Dirhams</p></small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <small className="text-muted"><button href="" className="btn btn-outline-dark">Ajouter au panier</button></small>
  </div>
  </div>

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className="card">
  <img className="card-img-top" src={bd} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Bague Noire</h5>
    <p className="card-text">Bague serpent Noire en acier inoxydable , résistante à l’eau et au parfum , et elle est ajustable à votre doigt</p>
  </div>
  <div className="card-footer">
      <div  class="text-center">
  <small className="text-muted"><p>80 Dirhams</p></small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <small className="text-muted"><button href="" className="btn btn-outline-dark">Ajouter au panier</button></small>
  </div>
</div>
</div>
</div>
<div>
<br></br>

<br></br>

<h1 class="text-center">Accessoires</h1>
          <p className="text-justify">Un look sans accessoires c'est comme un plat sans épices, c'est fade ! Les filles, l'accessoire est tout sauf accessoire. Parfois, il suffit juste d'ajouter un sac, des bijoux et une ceinture à une tenue pour en faire un look ultra stylé : oui, c'est souvent les looks les mieux accessoirisés qui font mouche. Pour un style effortless, ajoutez à votre total look noir, des joncs et colliers dorés ainsi qu'une pochette flashy pour relever le tout. Au quotidien, ne sous-estimez jamais le T-shirt blanc basique, qui se transforme en objet de mode ultra désirable porté avec les bons accessoires : boucles d'oreilles XXL, plastrons, corsets ou ceintures ... Pas question non plus de négliger vos cheveux, habillez-les de barrettes ou headbands. Shoppez la collection boohoo sans plus attendre.
          </p>
  <br></br>
<h5 class="text-center">Les Commantaires & Avis des clients</h5>
<br></br>

<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="text-center">⭐⭐⭐⭐⭐</h5>
      <p class="card-text">Satisfaction absolue hâte de voir vos nouvelles offres !!Merci beaucoup</p>
      <img className="card-img-top" src={avis2} alt="Card image cap" height="400"width="70"/>

    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="text-center">⭐⭐⭐⭐⭐</h5>
      <p class="card-text">j'adore le collier, il est trop beaux ,merci beaucoup une autre fois.</p>
      <img className="card-img-top" src={avis3} alt="Card image cap" height="400"width="70"/>

    </div>
  </div>
</div>
</div>

</div>
<br></br>
<br></br>

      </div>
      
  )

}
export default Home
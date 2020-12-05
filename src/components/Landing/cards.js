// import btn1 from "../../assets/img/cards/btn1.jpg";

export default ({ addinsCardsLinks }) => {
  return (
    <section className="bg-light page-section" id="addinsCards">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Revit Add-ins Cards
          </h2>
          <h3 className="section-subheading text-muted">
            Currently on Development
          </h3>
        </div>

        <div className="row">
          {addinsCardsLinks &&
            addinsCardsLinks.map(({ title, caption, picture }, index) => (
              <div className="col-md-4 col-sm-6 addinsCards-item">
                <a
                  className="addinsCards-link"
                  data-toggle="modal"
                  href="#addinsCardsModal1"
                >
                  <img className="img-fluid" src={picture} />
                </a>
                <div className="addinsCards-caption">
                  <h4 className="text-center">{title}</h4>
                  <p className="text-muted">{caption}</p>
                </div>
              </div>
            ))}
          {/* <-- on production1 -->  */}

          <div className="col-lg-4 col-sm-6">
            <div className="addinsCards-item">
              <a
                className="addinsCards-link"
                data-toggle="modal"
                href="#addinsCardsModal6"
              >
                <div className="addinsCards-hover">
                  <div className="addinsCards-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={btn1} alt="Logo" />
              </a>
              <div className="addinsCards-caption">
                <h4 className="text-center"> EZBuild</h4>
                <h5 className="text-center text-muted">
                  Currently on Testing:
                </h5>
                <div className="addinsCards-caption-subheading text-muted">
                  Creates a new building by collecting data from the user in a
                  form.
                </div>
              </div>
            </div>
          </div>

          <div
            class="addinsCards-modal modal fade"
            id="addinsCardsModal6"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times mr-1"></i>
                  </button>
                </div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="modal-body">
                        <h4> EZBuild</h4>
                        <p class="item-intro text-muted">
                          Creates a new building by collecting data from the
                          user in a form.
                        </p>
                        <img class="img-fluid d-block mx-auto" src={btn1} />
                        <p>
                          Roof type selector Use the wall type selector to
                          specify the type of roof, such as ' Generic -12" ' or
                          use the default choice and do the changes later. Slab
                          Use the slab checkbox to create the default floor
                          (slab) ' Generic -12" ' at the specified height Z-axis
                          in Project Base Point (PBP). Project base point (PBP)
                          Use the axes XYZ of PBP to locate the building in the
                          Revit world. PBP will be placed at the lower left
                          corner of the building and at the top of the slab.
                          Building dimensions Building horizontal dimensions are
                          from outer edge of wall to outer edge of wall.
                          Building height is from top of slab to top of wall.
                        </p>
                        <ul class="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Hazen</li>
                          <li>Category: Civil Enginering</li>
                        </ul>
                        <button
                          class="btn btn-primary"
                          data-dismiss="modal"
                          type="button"
                        >
                          <i class="fa fa-times mr-1"></i>
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

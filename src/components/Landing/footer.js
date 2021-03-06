const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <span className="copyright">
              <h6>
                Email: evergreenhoaofcary@gmail.com
                <br />
                Mailing address: <br />
                Evergreen HOA of Cary, <br />
                PO Box 4233, Cary, NC 27513
              </h6>
            </span>
          </div>
          {/* <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div> */}

          <div className="text-right">
            <span className="copyright">Copyright &copy; BevaCode 2020</span>
          </div>

          {/* <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;

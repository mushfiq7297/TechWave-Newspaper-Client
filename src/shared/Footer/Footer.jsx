
const Footer = () => {
  return (
    <div className=" bottom-0 w-full mt-6">
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <img src="https://i.ibb.co/jk47LpJ/black-logo.png" className="h-20 w-20" alt="" />
            <p>
              TECHWAVE Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by TECHWAVE Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

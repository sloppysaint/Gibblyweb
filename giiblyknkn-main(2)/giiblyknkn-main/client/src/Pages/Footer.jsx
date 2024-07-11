import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
        <footer className="text-center p-4 bg-orange-200 text-white">
        <div className="flex justify-around flex-wrap gap-8">
          <div className="footer-logo">
            {/* Add logo here if available */}
          </div>
          <div className="footer-links">
            <h3 className="text-lg mb-2">Useful Links</h3>
            <ul className="list-none p-0">
              <li className="my-2"><a href="#" className="no-underline text-white">Our Projects</a></li>
              <li className="my-2"><a href="#" className="no-underline text-white">FAQ's</a></li>
              <li className="my-2"><a href="#" className="no-underline text-white">News and Updates</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="text-lg mb-2">Contacts</h3>
            <p>Address: Toronto, Ontario, Canada</p>
            <p>Email: gibbly@gmail.com</p>
            <p>Phone Number: +1 4533433265</p>
          </div>
          <div className="footer-social">
            <h3 className="text-lg mb-2">Follow us</h3>
            <a href="#"><img src="twitter.png" alt="Twitter" className="w-8 mx-1" /></a>
            <a href="#"><img src="instagram.png" alt="Instagram" className="w-8 mx-1" /></a>
            <a href="#"><img src="th.jpg" alt="LinkedIn" className="w-8 mx-1" /></a>
            <a href="#"><img src="facebook.jpg" alt="Facebook" className="w-8 mx-1" /></a>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-800">&copy; All Copyrights reserved</p>
      </footer>
    </Fragment>
  )
}

export default Footer

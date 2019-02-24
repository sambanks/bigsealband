import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

const Contact = () => (
  <div>
    <h2 className="major">Contact</h2>
    <form method="post" action="#">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
    <ul className="icons">
      <li>
        <a href="#" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Contact

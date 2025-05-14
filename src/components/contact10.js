import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        </div>
      </div>
  )
}

Contact10.defaultProps = {
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIxODA1Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIxODA1Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  location1Description: undefined,
  location2ImageAlt: 'Los Angeles Office Image',
  heading1: undefined,
  location2Description: undefined,
  location1ImageAlt: 'New York Office Image',
  location1: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10

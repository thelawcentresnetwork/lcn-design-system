import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'

const styles = ({ fontFamily, color }) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
  },
  container: {
    padding: '10px 10px 10px 15px',
  },
  image: {
    width: '165px',
  },
})

export function LogoRenderer({ classes, children }) {
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src="https://members.lawcentres.org.uk/images/logo-lcn-dark.gif"
        alt="Law Centres Network"
      />
      {/* <h1 className={classes.logo}>{children}</h1> */}
    </div>
  )
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default Styled(styles)(LogoRenderer)

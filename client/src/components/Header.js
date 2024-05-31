import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <img src={require('../images/glasses.webp')} alt='icon' style={{ width: '48px', height: '48px' }}></img>
        
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, textDecoration: 'none' }}
        >
          {title}
        </Typography>

        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            component="h2"
            variant="h5"
            href={section.url}
            sx={{
              p: 1,
              flexShrink: 0,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const element = e.target;
              element.style.cursor = 'pointer';
              element.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e) => {
              const element = e.target;
              element.style.pointer = 'initial';
              element.style.backgroundColor = 'initial';
            }}
            onClick={() => (window.location.href = section.url)}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';

const NavBar = () => {
    return (
      <div style={NavBarStyle}>
          <center>
                <img 
                    width="85px" 
                    src="https://www.movidaseminovos.com.br/assets/img/aluguel.png">
                </img>
          </center>
      </div>
    );
  }

const NavBarStyle = {
    backgroundColor: 'orange',
    width: '100%',
    height: '60px',
    position: 'fixed',
    zIndex: 9000,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 40px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
}

export default NavBar;
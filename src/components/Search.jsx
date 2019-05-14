import React from 'react';

const Search = () => {
    return (
      <div style={SearchStyle}>
          <center>
                <input placeholder="Qual loja?" style={InputStyle} type="text" id="searc"/>
          </center>
      </div>
    );
  }

const SearchStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '20%',
    zIndex: '10000'
}

const InputStyle = {
    width: '80%',
    height: '40px',
    borderRadius: '5px',
    border: 'none',
    padding: '5px 12px',
    boxShadow: '0 3px 40px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)'
}

export default Search;
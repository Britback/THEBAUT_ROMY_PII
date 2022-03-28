import React from 'react';


class AjoutFichier extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Fichier sélectionné - ${
          this.fileInput.current.files[0].name
        }`
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Ajouter un billet :
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit" style={{backgroundColor: "blue",color:"white",
           height: "90%",
           width: "80%",
           borderRadius: 20,
           justifyContent: "center",
           alignItems: "center",}}>Ajouter</button>
        </form>
      );
    }
  }
  

  
  export default AjoutFichier
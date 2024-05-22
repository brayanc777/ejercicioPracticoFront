import React, { useState } from 'react';
import './Registro.css';

const RegistroProveedor = () => {
  const [proveedor, setProveedor] = useState({
    personeriaJuridica: '',
    nit: '',
    razonSocial: '',
    representanteLegal: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: '',
    departamento: '',
    direccion: ''
  });

  const paises = ['Colombia', 'Argentina', 'Brasil'];
  const departamentos = ['Antioquia', 'Cundinamarca', 'Valle del Cauca']; 
  const ciudades = ['Medellín', 'Bogotá', 'Cali']; 
  const nits = ['NIT', 'RUT']; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor({
      ...proveedor,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proveedor:', proveedor);
  };

  return (
    <div className="contenedor-formulario">
      <h2>Registro de Proveedor</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label>Personería Jurídica:</label>
          <input type="text" name="personeriaJuridica" value={proveedor.personeriaJuridica} onChange={handleChange} required />
        </div>
        <div className="campo-formulario">
          <label>NIT:</label>
          <select name="nit" value={proveedor.nit} onChange={handleChange} required>
            <option value="" disabled>Seleccione un NIT</option>
            {nits.map((nit) => (
              <option key={nit} value={nit}>{nit}</option>
            ))}
          </select>
        </div>
        <div className="campo-formulario">
          <label>Razón Social:</label>
          <input type="text" name="razonSocial" value={proveedor.razonSocial} onChange={handleChange} required />
        </div>
        <div className="campo-formulario">
          <label>Representante Legal:</label>
          <input type="text" name="representanteLegal" value={proveedor.representanteLegal} onChange={handleChange} required />
        </div>
        <div className="campo-formulario">
          <label>Teléfono:</label>
          <input type="text" name="telefono" value={proveedor.telefono} onChange={handleChange} required />
        </div>
        <div className="campo-formulario">
          <label>Email:</label>
          <input type="email" name="email" value={proveedor.email} onChange={handleChange} required />
        </div>
        <div className="campo-formulario">
          <label>Ciudad:</label>
          <select name="ciudad" value={proveedor.ciudad} onChange={handleChange} required>
            <option value="" disabled>Seleccione una ciudad</option>
            {ciudades.map((ciudad) => (
              <option key={ciudad} value={ciudad}>{ciudad}</option>
            ))}
          </select>
        </div>
        <div className="campo-formulario">
          <label>País:</label>
          <select name="pais" value={proveedor.pais} onChange={handleChange} required>
            <option value="" disabled>Seleccione un país</option>
            {paises.map((pais) => (
              <option key={pais} value={pais}>{pais}</option>
            ))}
          </select>
        </div>
        <div className="campo-formulario">
          <label>Departamento:</label>
          <select name="departamento" value={proveedor.departamento} onChange={handleChange} required>
            <option value="" disabled>Seleccione un departamento</option>
            {departamentos.map((departamento) => (
              <option key={departamento} value={departamento}>{departamento}</option>
            ))}
          </select>
        </div>
        <div className="campo-formulario">
          <label>Dirección:</label>
          <input type="text" name="direccion" value={proveedor.direccion} onChange={handleChange} required />
        </div>
        <button type="submit">Registrar Proveedor</button>
      </form>
    </div>
  );
};

export default RegistroProveedor;

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import './Controls.css';
import { TextField } from '@mui/material';

export default function Controls({
  head,
  setHead,
  body,
  setBody,
  shoes,
  setShoes,
  handleChange,
  catchphrase,
  newCatchphrase,
  addCatchphrase,
}) {
  return (
    <div className="controls">
      <div className="form-select-head">
        <Select
          className="head-select"
          value={head}
          onChange={(e) => {
            setHead(e.target.value);
            handleChange('head');
          }}
        >
          <MenuItem value="lizzo-head">Lizzo Head</MenuItem>
          <MenuItem value="clairo-head">Clairo Head</MenuItem>
          <MenuItem value="taylor-head">Taylor Swift Head</MenuItem>
        </Select>
      </div>

      <div className="form-select-body">
        <Select
          className="body-select"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            handleChange('body');
          }}
        >
          <MenuItem value="lizzo-body">Lizzo body</MenuItem>
          <MenuItem value="clairo-body">Clairo body</MenuItem>
          <MenuItem value="taylor-body">Taylor Swift body</MenuItem>
        </Select>
      </div>
      <div className="form-select-shoes">
        <Select
          className="shoes-select"
          value={shoes}
          onChange={(e) => {
            setShoes(e.target.value);
            handleChange('shoes');
          }}
        >
          <MenuItem value="shoe1">Shoe 1</MenuItem>
          <MenuItem value="shoe2">Shoe 2</MenuItem>
          <MenuItem value="shoe3">Shoe 3</MenuItem>
        </Select>
      </div>

      <TextField
        value={catchphrase}
        onChange={(e) => {
          newCatchphrase(e.target.value);
        }}
      ></TextField>
      <button onClick={() => addCatchphrase()}></button>
    </div>
  );
}

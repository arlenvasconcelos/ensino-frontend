import React, { useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, TextField, FormControl, InputBase } from '@material-ui/core';
import {withStyles, fade} from '@material-ui/core/styles'


export default function FormDialog({setOpenDialogForm, openDialogForm}) {

  const [document, setDocument] = useState({
    label: "",
    answer: ""
  })


  const handleClose = () => {
    setOpenDialogForm(false);
  };

  return (
    <div>
      <Dialog open={openDialogForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Documento</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Qual Tipo de documento você deseja?
          </DialogContentText> */}
          <FormControl >
           <TextField
              id="filled-full-width"
              label="Título"
              style={{ margin: 8 }}
              placeholder=""
              // helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

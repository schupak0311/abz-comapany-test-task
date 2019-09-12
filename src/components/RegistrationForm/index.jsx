import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { registration } from "../../actions/usersActions";

import "./Registration.scss";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 320,
    height: 56,
    fontSize: 16,
    color: "#8d8c8c",
    fontFamily: "Source Sans Pro",
    fontWeight: 400
  },
  select: {
    width: 450,
    borderRadius: 4,
    border: '1 "solid" "#b7b7b7"'
  },
  input: {
    width: 250,
    height: 100
  },
  menu: {
    width: 200
  },
  btn: {
    borderRadius: 4,
    border: "2px solid #ef6c00",
    marginLeft: -20,
    width: 76,
    height: 50,
    fontSize: 14,
    fontWeight: 600,
    color: "#ef6c00",
    backgroundColor: "#ffffff",
    zIndex: 10,
    cursor: "pointer",
    textAlign: "center"
  }
}));

const RegistrationForm = ({ positions }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState();
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isPositionValid, setIsPositionValid] = useState(true);
  const [isPhotoValid, setIsPhotoValid] = useState(true);

  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setOpen(false);
  };

  const onNameChange = name => {
    setName(name);
    setIsNameValid(true);
  };

  const onEmailChange = email => {
    setEmail(email);
    setIsEmailValid(true);
  };

  const onPhoneChange = phone => {
    setPhone(phone);
    setIsPhoneValid(true);
  };

  const onPositionChange = position => {
    setPosition(Number(position));
    setIsPositionValid(true);
  };

  const onPhotoChange = photo => {
    setPhoto(photo);
    setIsPhotoValid(true);
  };

  const validateName = () => {
    const isNameValid = validator.isByteLength(name, { min: 2, max: 60 });
    setIsNameValid(isNameValid);
    return isNameValid;
  };

  const validateEmail = () => {
    const isEmailValid = validator.isEmail(email);
    setIsEmailValid(isEmailValid);
    return isEmailValid;
  };

  const validatePhone = () => {
    const validPhone = "+" + phone;
    const isPhoneValid = validator.isMobilePhone(validPhone, "uk-UA");
    setIsPhoneValid(isPhoneValid);
    return isPhoneValid;
  };

  // const validatePosition = () => {
  //   const isPositionValid = validator.isEmpty(String(position));
  //   console.log(isPositionValid);
  //   setIsPositionValid(isPositionValid);
  //   return isPositionValid;
  // };

  // const validatePhoto = () => {
  //   const isPhotoValid = validator.isEmpty(photo);
  //   console.log(isPhotoValid);
  //   setIsPhotoValid(isPhotoValid);
  //   return isPhotoValid;
  // };

  const handleClickSignUp = async e => {
    e.preventDefault();
    const valid = [validateName(), validateEmail(), validatePhone()].every(
      Boolean
    );

    if (!valid) {
      return;
    }
    await dispatch(
      registration({ name, email, phone, position_id: position, photo })
    );
    setOpen(true);
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <div className="container">
      <div className="users-headings">
        <h1 className="users-headings--1">Register to get a work</h1>
        <h2 className="users-headings--2">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </h2>
      </div>

      <section className="registration" id="registration">
        <form onSubmit={handleClickSignUp} className="registration__form">
          <div className="registration__form--1">
            {isNameValid ? (
              <TextField
                required
                id="outlined-error"
                label="Name"
                placeholder="Your Name"
                className="registration__form--1__input"
                margin="normal"
                style={{ marginRight: 20 }}
                onChange={e => onNameChange(e.target.value)}
                onBlur={validateName}
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            ) : (
              <TextField
                error
                id="outlined-error"
                label="Error"
                placeholder="Your Name"
                className="registration__form--1__input"
                margin="normal"
                style={{ marginRight: 20 }}
                onChange={e => onNameChange(e.target.value)}
                onBlur={validateName}
                helperText="User name, should be 2-60 characters"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            )}

            {isEmailValid ? (
              <TextField
                required
                id="outlined"
                label="Email"
                placeholder="Your Email"
                style={{ marginRight: 20 }}
                className="registration__form--1__input"
                onChange={e => onEmailChange(e.target.value)}
                onBlur={validateEmail}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            ) : (
              <TextField
                error
                id="outlined"
                label="Email"
                placeholder="Your Email"
                style={{ marginRight: 20 }}
                className="registration__form--1__input"
                onChange={e => onEmailChange(e.target.value)}
                onBlur={validateEmail}
                margin="normal"
                helperText="Your email is invalid"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            )}
            {isPhoneValid ? (
              <TextField
                required
                id="outlined"
                label="Phone"
                placeholder="+38(___) ___ __ __"
                className="registration__form--1__input"
                style={{ marginRight: 20 }}
                margin="normal"
                onChange={e => onPhoneChange(e.target.value)}
                onBlur={validatePhone}
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            ) : (
              <TextField
                error
                id="outlined"
                label="Error"
                placeholder="Your Phone"
                style={{ marginRight: 20 }}
                className="registration__form--1__input"
                helperText="Your number should be in format 380111111111"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            )}
          </div>

          <div className="registration__form--2">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Select your position
              </InputLabel>
              <Select
                required
                native
                placeholder="Select your position"
                className="registration__form--2__select"
                onChange={e => onPositionChange(e.target.value)}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple"
                }}
              >
                <option value="" />
                <option value={1}>Lawyer</option>
                <option value={2}>Content manager</option>
                <option value={3}>Security</option>
                <option value={3}>Designer</option>
              </Select>
            </FormControl>

            <div className="registration__form__upload">
              <TextField
                id="outlined-bare"
                className={classes.textField}
                margin="normal"
                placeholder={photo ? photo.name : "Upload your photo"}
                variant="outlined"
                helperText="File format jpg up to 5 MB, the minimum size of 70x70px"
                inputProps={{ "aria-label": "bare" }}
              />

              <input
                name="image"
                accept=".jpg, .jpeg"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                onChange={e => onPhotoChange(e.target.files[0])}
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.btn}
                >
                  <img src={require("../../assets/icons/upload.svg")} alt="" />
                </Button>
              </label>
            </div>
          </div>

          <button className="registration__form__button">Sign Up</button>
        </form>
        <Dialog
          open={open}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have successfully passed the registration
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </div>
  );
};

export default RegistrationForm;

import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import WhatsAppIcon from "@material-ui/icons/WhatsApp"; // Ícone do WhatsApp


import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png";
//import { Copyright } from "@material-ui/icons";

const Copyright = () => {
	return (
 		<Typography variant="body2" color="white" align="center">
 			{"Todos os direitos reservados - "}
 			<Link color="inherit" href="https://asempreendimentos.com">
 				AS Empreendimentos
 			</Link>{" "}
 			{new Date().getFullYear()}
 			{"."}
 		</Typography>
 	);
};

const useStyles = makeStyles(theme => ({
	paper: {
	marginTop: theme.spacing(8),
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	padding: theme.spacing(2),
	borderRadius: theme.spacing(2),
	//backgroundColor: `rgba(${theme.palette.background.paper}, 0.8)`,
	backgroundColor: theme.palette.background.paper,
	boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
	},

	bg: {
		width: '100vw',
		height: '100vh',
		display: "flex",
		textAlign: "center",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		background: "linear-gradient(to top, rgb(14 14 14) 0%, rgb(44 201 146) 100%)",
	},
	
	avatar: {
	margin: theme.spacing(1),  
	backgroundColor: theme.palette.secondary.main,
	},
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
		margin: theme.spacing(3, 0, 2),
	},
  whatsappButton: {
    background: "#00826a",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    "&:hover": {
      background: "#0c6a58",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  logo: {
    margin: "10px auto",
    width: "90%",
    display: "block",
    transform: "scale(0.7)", // Reduz o tamanho em 30%
  },

}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	return (
	    <div className={classes.bg}>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<div>
					<img style={{ margin: "0 auto", height: '100%', width: '100%',alignSelf: 'center' }} src={logo} alt="Whats" />
				</div>
				{/* <Typography component="h1" variant="h5">
					{i18n.t("login.title")}
				</Typography> */}
				<form className={classes.form} noValidate onSubmit={handlSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label={i18n.t("login.form.email")}
						name="email"
						value={user.email}
						onChange={handleChangeInput}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={i18n.t("login.form.password")}
						type="password"
						id="password"
						value={user.password}
						onChange={handleChangeInput}
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{i18n.t("login.buttons.submit")}
					</Button>

										<a
          			href="https://wa.me/5585998214849"
          			className={classes.whatsappButton}
          			target="_blank"
          			rel="noopener noreferrer"
        			>
          			<WhatsAppIcon /> {i18n.t("login.buttons.whatsapp")}
        			</a>
					<br/>
                    <Grid container>
						<Grid item>
							<Link
								href="#"
								variant="body2"
								component={RouterLink}
								to="/forgetpsw"
							>
								{i18n.t("login.buttons.password")}
							</Link>
						</Grid>
						</Grid>
						<Grid container>
						<Grid item>
							<Link
								href="#"
								variant="body2"
								component={RouterLink}
								to="/signup"
							>
								{i18n.t("login.buttons.register")}
							</Link>
						</Grid>
					</Grid>
					
				</form>
				
			</div>
			
		</Container>
		<Box mt={8} className={classes.copyleft}>{ <Copyright /> }</Box>
		</div>
	);
};

export default Login;

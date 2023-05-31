import { useFormik, FormikHelpers } from "formik";
import { LoginSchema } from "./LoginSchema";
import { initialValues, InitialValues } from "./initialValues";
import { TextField, Box, Button, Typography } from "@mui/material";
import thesimpsonslogo from "../../assets/thesimpsonslogo.png"
import { useAuthContext } from "../../context/userContext";

// import { useAuthContext } from "../../context/AuthContext";

export default function LoginFormik() {

//   const{login, logout, user} = useAuthContext()

// function login(values:InitialValues,actions:FormikHelpers<InitialValues>){
//     if(values.email==="alvaro@gmail.com"&&values.password === "Malaga2020"){
//         alert("Logueaoo")
//     } else{
//         alert("Ouch!! Try again")
//     }
//     actions.resetForm()
// }
  const {login, user} = useAuthContext()

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit:login,
  });

  return (
    <>
    {/* <Typography variant="h4" sx={{ fontFamily:"Homer Simpson Revised",textAlign: "center" }}>
      Login
    </Typography> */}
    {user?.email?<span>Welcome to my API The Simpsons!! Now you have access to characters.</span>:
    <form onSubmit={handleSubmit}>
        <img width="320px" className="imageLogin" src={thesimpsonslogo}/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: "1px solid #ffd90f",
        borderRadius: 2,
      }}
    >
    
      <TextField
        id="email"
        error={Boolean(errors.email&&touched.email)}        
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Email"
        size="medium" 
        sx={{ mb: 2}}
        helperText={errors.email}
        
      />
      <TextField
        id="password"
        name="password"
        type="password"
        error={Boolean(errors.password&&touched.password)} 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        label="Password"
        size="small" 
        sx={{ mb: 2 }}
        helperText={errors.password}
      />
      <Button disabled={isSubmitting} type="submit" variant="contained" sx={{ mb: 2 }}><b>Login</b></Button>
    </Box>
    </form>}

    
    </>
  );
}
import { InitialValues } from './../components/LoginFormik/initialValues';
import { FormikHelpers } from "formik";
export interface Value {
  user: InitialValues|null;
  login: (values: InitialValues|null, actions: FormikHelpers<InitialValues>|null) => void;
  logout: () => void;
//   setUser: (values: UserAuth) => void;
}
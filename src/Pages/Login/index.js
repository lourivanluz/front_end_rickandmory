import { NavBar } from "../../Components/NavBar";
import { Container, FormContainer } from "./style";
import { useHistory } from "react-router";
import { InputFild } from "../../Components/InputFild";
import { ButtonsDefult } from "../../Components/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../providers/user";

const Login = () => {
  const history = useHistory();
  const { loginAccount } = useUser();

  const handleClick = (path) => {
    history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().email("invalido").required("obrigatório"),
    password: yup.string().required("obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data) => {
    loginAccount(data);
  };

  return (
    <Container>
      <NavBar />
      <FormContainer>
        <div className="titleForm">
          <h1>Login</h1>
          <p>
            Não tem uma conta ?
            <span onClick={() => handleClick("/register")}>Registre-se</span>
          </p>
        </div>
        <div className="containerForm">
          <form className="inputForm" onSubmit={handleSubmit(onFormSubmit)}>
            <InputFild
              required
              id="email"
              type="text"
              name="Email"
              register={register}
              error={!!errors.email}
              messageerror={errors.email?.message}
            />
            <InputFild
              required
              id="password"
              type="password"
              name="Senha"
              register={register}
              error={!!errors.password}
              messageerror={errors.password?.message}
            />
            <div className="remember">
              <label htmlFor="cb">
                <input id="cb" type="checkbox" />
                <span>Lembrar de mim</span>
              </label>
              <span>Esqueceu a senha ou email ?</span>
            </div>

            <ButtonsDefult
              type={"submit"}
              borderradius={"15px"}
              hoverbcolor={"#057d9f"}
              hovercolor={"white"}
              hoverborder={"1px solid #057d9f"}
            >
              Login
            </ButtonsDefult>
          </form>
          <div className=" divider">
            <div></div>
          </div>

          <div className="loginForm">
            <div>facebook</div>
            <div>google</div>
          </div>
        </div>
        <footer>
          <p>
            * Ao se registrar, você concorda com os nossos
            <span>Termos de Uso</span>, em receber emails e atualizações do Wix
            e confirma que leu nossa <span>Política de Privacidade</span>.
          </p>
          <div>
            <div className="divider"></div>
          </div>
          <p>
            Este site é protegido pelo reCAPTCHA Enterprise e a
            <span>Política de Privacidade</span> e <span>Termos de Uso</span> do
            Google se aplicam.
          </p>
        </footer>
      </FormContainer>
    </Container>
  );
};
export default Login;

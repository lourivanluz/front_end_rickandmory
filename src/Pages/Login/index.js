import { Container, FormContainer } from "./style";
import { useHistory } from "react-router";
import { InputFild } from "../../Components/InputFild";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../providers/user";
import { BaseButton } from "../../Components/BaseButton";
import { Loading } from "../../Components/Loading";

const Login = () => {
  const history = useHistory();
  const { loginAccount, showLoad, setShowLoad } = useUser();

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
    setShowLoad(true);
    loginAccount(data);
  };

  return (
    <Container>
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
            <BaseButton
              type={"submit"}
              title={"login"}
              borderRadius={"15"}
              hoverBg={"#057d9f"}
              width={"90"}
              border={"1px solid #057d9f"}
            >
              {showLoad && <Loading />}
            </BaseButton>
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

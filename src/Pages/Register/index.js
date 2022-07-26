import { Container, FormContainer } from "./style";
import { useHistory } from "react-router";
import { InputFild } from "../../Components/InputFild";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../Schema/Schema";
import { useUser } from "../../providers/user";
import { BaseButton } from "../../Components/BaseButton";
import { Loading } from "../../Components/Loading";

const Register = () => {
  const history = useHistory();

  const { createAccount, showLoad, setShowLoad } = useUser();

  const handleClick = (path) => {
    history.push(path);
  };

  const schemaform = schema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaform),
  });

  const onFormSubmit = (data) => {
    setShowLoad(true);
    createAccount(data);
  };

  return (
    <Container>
      <FormContainer>
        <div className="titleForm">
          <h1>Registre-se</h1>
          <p>
            Já tem uma Conta ?
            <span onClick={() => handleClick("/login")}>Faça Login</span>
          </p>
        </div>
        <div className="containerForm">
          <form className="inputForm" onSubmit={handleSubmit(onFormSubmit)}>
            <InputFild
              required
              id="name"
              type="text"
              name="Nome completo"
              register={register}
              error={!!errors.name}
              messageerror={errors.name?.message}
            />
            <InputFild
              register={register}
              required
              id="email"
              type="text"
              name="Email"
              error={!!errors.email}
              messageerror={errors.email?.message}
            />
            <InputFild
              register={register}
              required
              id="password"
              type="password"
              name="Senha"
              error={!!errors.password}
              messageerror={errors.password?.message}
            />
            <BaseButton
              type={"submit"}
              title={"Cadastre-se"}
              borderRadius={"15"}
              hoverBg={"#057d9f"}
              width={"160"}
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
export default Register;

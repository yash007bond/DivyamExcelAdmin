import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Text,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
  Center,
} from "@chakra-ui/react";

import { UserAuth } from "../contexts/AuthContext";
import { GlobalStyles } from "../constants/styles";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [showSignInErrorAlert, setShowSignInErrorAlert] = useState(false);
  const [signInErrorDescription, setSignInErrorDescription] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  useEffect(() => {
    if (validateEmail(email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }, [email]);

  useEffect(() => {
    if (emailTouched && !emailIsValid) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
  }, [emailTouched, emailIsValid]);

  useEffect(() => {
    if (password.length >= 8) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordTouched && !passwordIsValid) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  }, [passwordTouched, passwordIsValid]);

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [emailIsValid, passwordIsValid]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim());
  };

  const validateEmail = (email) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value.trim());
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    if (!formIsValid) {
      return;
    }

    try {
      await signIn(email, password);
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      setShowSignInErrorAlert(true);
      setPassword("");

      if (error.code === "auth/user-not-found") {
        setSignInErrorDescription("Email address not found");
      } else if (error.code === "auth/wrong-password") {
        setSignInErrorDescription("Wrong email/password combination");
      }
    }
  };

  return (
    <Container
      flexDirection="column"
      h="100vh"
      p="86"
      bgColor={GlobalStyles.colors.purple800}
      color={GlobalStyles.colors.gray500}
    >
      {showSignInErrorAlert && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{signInErrorDescription}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleOnSubmit}>
        <Text fontSize="18" mt="32px" mb="8px">
          Email
        </Text>
        <Input
          size="lg"
          variant="filled"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          isInvalid={showEmailError}
          errorBorderColor="red.400"
        />
        <Text fontSize="18" mt="32px" mb="8px">
          Password
        </Text>
        <Input
          size="lg"
          variant="filled"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          isInvalid={showPasswordError}
          errorBorderColor="red.400"
        />
        <Center w="100%">
          <Button
            bgColor="#EEEEEE"
            type="submit"
            color="#212529"
            p="24px"
            mt="32px"
          >
            SIGN IN
          </Button>
        </Center>
      </form>
    </Container>
  );
};

export default SignInPage;

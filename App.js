import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider, VStack, HStack, Box, Text, Input, Icon, Button, Container } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';


export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [handleSubmit, setHandleSubmit] = useState({emailText: '', passwordText: ''})
    const handler = () => {
      setHandleSubmit({emailText: email, passwordText: password});
      console.log(handleSubmit.emailText, handleSubmit.passwordText)
      console.log("clicou no botão")
    }

    const config = {
      dependencies: {
        "linear-gradient": LinearGradient
      }
    };

  return (
    <NativeBaseProvider config={config}>
      <Box flex={1} bg={{linearGradient: {colors: ["#111621", "#1b1b2f"], start: [0, 0], end: [0, 1]}}} alignItems="center" justifyContent="center">
        <VStack flex={1} justifyContent="center" width="70%">
          <Text textAlign="left" color="white" marginBottom="10px" marginTop="12px" fontSize="12px">Email</Text>
          <Input marginBottom="6px" placeholder="email@exemplo.com" w="100%" color="white" value={email} onChangeText={e => setEmail(e)} />
          <Text textAlign="left" color="white" marginBottom="10px" marginTop="12px" fontSize="12px">Senha</Text>
          <Input InputRightElement={<Icon as={<MaterialIcons name="visibility-off"/>} size={4} mr="2" color="muted.400"/>} marginBottom="20px" placeholder="********" w="100%" color="white" value={password} onChangeText={e => setPassword(e)}/>
          <Button alignSelf="center" bg="#5e66f0" borderRadius="25px" width="85%" onPress={() => handler()}>Entrar</Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

                                                              
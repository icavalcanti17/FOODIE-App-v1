import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Registro (props) {

    const [nome, setNome] = useState ("");
    const [email, setEmail] = useState ("");
    const [senha1, setSenha1] = useState ("");
    const [senha2, setSenha2] = useState ("");

    return <>
        <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
            <Header texto="Criar minha conta!"/>
                <View style={styles.formGroup}>
                    
                    <View style={styles.form}>
                        <TextBox label="Nome Completo" onChangeText={(texto) => setNome(texto)} value={nome}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="E-mail" onChangeText={(texto) => setEmail(texto)} value={email}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Crie uma nova senha" isPassword={true} onChangeText={(texto) => setSenha1(texto)} value={senha1}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Confrime a nova senha" isPassword={true} onChangeText={(texto) => setSenha2(texto)} value={senha2}/>
                    </View>

                    <View style={styles.form}>
                        <Button texto="Próximo passo" onPress={() => props.navigation.navigate("registro2")}/>
                    </View>
                </View> 
        </ScrollView>
        </View>
        </>
    
}

export default Registro;
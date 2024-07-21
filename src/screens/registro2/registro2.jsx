import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Registro2 (props) {

    const [endereco, setEndereco] = useState ("");
    const [numero, setNumero] = useState ("");
    const [bairro, setBairro] = useState ("");
    const [cidade, setCidade] = useState ("");
    const [uf, setUf] = useState ("");
    const [cep, setCep] = useState ("");

    return <>
        <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
            <Header texto="Informe seu endereço"/>
                <View style={styles.formGroup}>
                    
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Edereço" onChangeText={(texto) => setEndereco(texto)} value={endereco}/>
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="Número" onChangeText={(texto) => setNumero(texto)} value={numero}/>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Bairro" onChangeText={(texto) => setBairro(texto)} value={bairro}/>
                    </View>

                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Cidade" onChangeText={(texto) => setCidade(texto)} value={cidade}/>
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="UF" onChangeText={(texto) => setUf(texto)} value={uf}/>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="CEP" onChangeText={(texto) => setCep(texto)} value={cep}/>
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar minha conta"/>
                    </View>
                </View> 
        </ScrollView>
        </View>
        </>
    
}

export default Registro2;
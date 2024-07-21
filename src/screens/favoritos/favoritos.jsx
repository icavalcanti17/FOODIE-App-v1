import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/dados.js";
import Restaurante from "../../components/restaurantes/restaurante.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./faoritos.style.js";


function Favoritos() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurante) => restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={(dados) => {
          return (
            <Restaurante
              nome={dados.item.nome}
              endereco={dados.item.endereco}
              logotipo={dados.item.logotipo}
              icone={icons.remove}
            />
          );
        }}
        
        contentContainerStyle={styles.containerList}

        ListEmptyComponent={() => {
            return <View style={styles.empty}>
                <Image source={icons.empty} style={styles.logo}/>
                <Text style={styles.emptyText}>Nenhum Item Adicionado...</Text>
            </View>
        }}

      />
    </View>
  );
}

export default Favoritos;

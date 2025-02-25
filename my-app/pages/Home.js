import { TextInput } from "react-native";

export default function Home() {
    return (
        <View>
            <Text>Persistência e Navegação</Text>
            <TextInput placeholder="Digite aqui" />
            <Text>Sem Persistência:Nenhum texto salvo</Text>
            <Text>Texto persistido:Nenhum texto salvo</Text>
            <button>Salvar</button>
            <button>Limpar</button>
            <button>Detalhes</button>
        </View>
    ));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
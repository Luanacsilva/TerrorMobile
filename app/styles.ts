import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D1117', // Fundo escuro
      padding: 10,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#E53E3E', // Vermelho sangue
      textAlign: 'center',
      marginVertical: 15,
      textShadowColor: '#000',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
    },
    galleryItem: {
      backgroundColor: '#1A202C', // Blocos sombrios
      borderRadius: 8,
      marginBottom: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#F56565', // Vermelho mais claro
      textAlign: 'center',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#A0AEC0', // Cinza claro
      textAlign: 'justify',
      lineHeight: 20,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#9B2C2C', // Vermelho intenso
      textAlign: 'right',
      marginTop: 10,
    },
    addButton: {
      backgroundColor: '#2D3748',
      paddingVertical: 10,
      marginTop: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#E53E3E', // Bordas vermelhas
    },
    addButtonText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#E53E3E',
    },
  });
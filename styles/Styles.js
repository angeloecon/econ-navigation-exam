import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonContainer: {
    gap: 10,
  },
});

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    marginBottom: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '48%', 
    padding: 20,
    borderRadius: 12,
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  actionContainer: {
    marginTop: 'auto',  
    marginBottom: 30,
  }
})

export const ProfileStyle =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 15,
    backgroundColor: '#f2f2f2', 
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 20,
    marginBottom: 40,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  actionSection: {
    paddingHorizontal: 30,
  }
})
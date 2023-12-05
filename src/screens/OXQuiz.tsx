import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const OXQuiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.quizMain}>{"오늘의 퀴즈" + "\n"}</Text>
        <Image source={require("./img/2.png")} style={styles.quizImage2} />
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.quizField}>{"분야(법,정책 등)"}</Text>
        <Text style={styles.quizText}>
          {"퀴즈 질문: 무엇이 어떻게 될까요? 123 456 789 123456789" + "\n"}
        </Text>
        <Image source={require("./img/1.png")} style={styles.quizImage} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonY}
            onPress={() => setSelectedOption("O")}
          >
            <Text style={styles.buttonText}>{"O"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonN}
            onPress={() => setSelectedOption("X")}
          >
            <Text style={styles.buttonText}>{"X"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
  boxContainer: {
    backgroundColor: "#FFFFFF",
    width: 375,
    height: 385,
    borderRadius: 30,
    borderColor: "#00A184",
    borderWidth: 2,
    padding: 20,
  },
  quizMain: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
    color: "#00A184",
    fontWeight: "bold",
  },
  quizField: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
    color: "#00A184",
  },
  quizText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },

  buttonY: {
    marginTop: 0,
    marginLeft: 35,
    backgroundColor: "#00A184",
    padding: 10,
    borderRadius: 12,
    width: 130,
    height: 40,
  },
  buttonN: {
    marginTop: 0,
    marginLeft: 10,
    backgroundColor: "#F06C6C",
    padding: 10,
    borderRadius: 12,
    width: 130,
    height: 40,
  },

  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    marginRight: 7,
    textAlign: "center",
    marginLeft: 10,
  },

  quizImage: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    marginTop: 10,
    marginLeft: 125,
  },
  buttonContainer: {
    flexDirection: "row", // 이 부분을 추가하여 수평 방향으로 정렬
    marginTop: 50,
  },
  quizImage2: {
    resizeMode: "cover",
    marginTop: 25,
    marginLeft: 225,
  },
  headContainer: {
    flexDirection: "row", // 이 부분을 추가하여 수평 방향으로 정렬
  },
});

export default OXQuiz;

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitVote = () => {
    if (selectedOption) {
      console.log("선택한 답안:", selectedOption);
    } else {
      console.log("투표를 제출하려면 답안을 선택하세요.");
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quizMain}>{"오늘의 퀴즈" + "\n"}</Text>
      <View style={styles.boxContainer}>
        <Text style={styles.quizField}>{"분야(법,정책 등)"}</Text>
        <Text style={styles.quizText}>
          {"퀴즈 질문: 무엇이 어떻게 될까요? 123 456 789 123456789" + "\n"}
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("선택지 1") && { backgroundColor: "#CCCCCC" },
          ]}
          onPress={() => handleOptionPress("선택지 1")}
          disabled={selectedOption !== null}
        >
          <Text style={styles.buttonText}>{"선택지 1"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("선택지 2") && { backgroundColor: "#CCCCCC" },
          ]}
          onPress={() => handleOptionPress("선택지 2")}
          disabled={selectedOption !== null}
        >
          <Text style={styles.buttonText}>{"선택지 2"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("선택지 3") && { backgroundColor: "#CCCCCC" },
          ]}
          onPress={() => handleOptionPress("선택지 3")}
          disabled={selectedOption !== null}
        >
          <Text style={styles.buttonText}>{"선택지 3"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("선택지 4") && { backgroundColor: "#CCCCCC" },
          ]}
          onPress={() => handleOptionPress("선택지 4")}
          disabled={selectedOption !== null}
        >
          <Text style={styles.buttonText}>{"선택지 4"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonvote}
          onPress={handleSubmitVote}
          disabled={selectedOption === null}
        >
          <Text style={styles.buttonvoteText}>{"투표하기"}</Text>
        </TouchableOpacity>
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
    height: 430,
    borderRadius: 30,
    borderColor: "#00A184",
    borderWidth: 2,
    padding: 20,
  },
  quizMain: {
    fontSize: 20,
    marginTop: 20,
    color: "#00A184",
    fontWeight: "bold",
  },
  quizField: {
    fontSize: 12,
    marginBottom: 10,
    color: "#00A184",
  },
  quizText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  button: {
    backgroundColor: "#CFEDE7",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  buttonvote: {
    marginTop: 10,
    marginLeft: 230,
    backgroundColor: "#CFEDE7",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    width: 100,
    height: 40,
  },

  buttonText: {
    fontSize: 16,
    color: "#6e6e6e",
    textAlign: "left",
    marginLeft: 10,
  },
  buttonvoteText: {
    fontSize: 14,
    color: "#6e6e6e",
    textAlign: "center",
  },
});

export default QuizScreen;

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitVote = () => {
    if (selectedOption) {
      console.log("선택한 답안:", selectedOption);
      setVoted(true);
    } else {
      console.log("투표를 제출하려면 답안을 선택하세요.");
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.pollMain}>{"여론 조사" + "\n"}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.pollDate}>{"2023.00.00"}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.pollText}>{"국민 평화통일 여론 조사"}</Text>
          <Text style={styles.viewMore}>{"자세히 보기"}</Text>
        </View>
        <Text style={styles.pollSum}>{"간단한 설명"}</Text>
        {voted ? (
          <TouchableOpacity
            style={[
              styles.button,
              isOptionSelected("찬성") && { backgroundColor: "#CCCCCC" },
              voted && { borderColor: "#999999" },
            ]}
            onPress={() => handleOptionPress("찬성")}
            disabled={voted}
          >
            <Text style={styles.buttonText}>{"찬성"}</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[
                styles.button,
                isOptionSelected("찬성") && { backgroundColor: "#cccccc" },
              ]}
              onPress={() => handleOptionPress("찬성")}
              disabled={voted}
            >
              <Text style={styles.buttonText}>{"찬성"}</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("반대") && { backgroundColor: "#CCCCCC" },
            voted && { borderColor: "#999999" },
          ]}
          onPress={() => handleOptionPress("반대")}
          disabled={voted}
        >
          <Text style={styles.buttonText}>{"반대"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            isOptionSelected("상관없음") && { backgroundColor: "#CCCCCC" },
            voted && { borderColor: "#999999" },
          ]}
          onPress={() => handleOptionPress("상관없음")}
          disabled={voted}
        >
          <Text style={styles.buttonText}>{"상관없음"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonvote, voted && { backgroundColor: "#d1d1d1" }]}
          onPress={handleSubmitVote}
          disabled={selectedOption === null || voted}
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
  viewMore: {
    fontSize: 10,
    marginTop: 8,
    marginLeft: 40,
    textDecorationLine: "underline",
    color: "#6C6C6C",
    fontWeight: "bold",
  },
  boxContainer: {
    backgroundColor: "#FFFFFF",
    width: 375,
    height: 375,
    borderRadius: 30,
    borderColor: "#00A184",
    borderWidth: 2,
    padding: 20,
  },
  headContainer: {
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "row",
  },
  pollMain: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    color: "#00A184",
    fontWeight: "bold",
  },
  pollDate: {
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
    color: "#6C6C6C",
  },
  pollText: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: "#000000",
  },
  pollSum: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: "#404040",
  },
  button: {
    borderColor: "#69C8B6",
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonvote: {
    marginTop: 10,
    marginLeft: 230,
    backgroundColor: "#CFEDE7",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    width: 90,
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
  bottonYvoted: {
    fontSize: 16,
    backgroundColor: "#CFEDE7",
    textAlign: "center",
  },
  bottonNvoted: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  bottonDvoted: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  bottonEvoted: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default QuizScreen;

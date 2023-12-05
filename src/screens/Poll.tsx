import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({
    찬성: 126,
    반대: 77,
    상관없음: 32,
  });

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitVote = () => {
    if (selectedOption) {
      console.log("선택한 답안:", selectedOption);
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1,
      }));
      setVoted(true);
    } else {
      console.log("투표를 제출하려면 답안을 선택하세요.");
    }
  };

  const isOptionSelected = (option) => {
    return selectedOption === option;
  };

  const calculateVotingRatio = (option) => {
    const totalVotes = votes.찬성 + votes.반대 + votes.상관없음;
    return totalVotes === 0
      ? 0
      : ((votes[option] / totalVotes) * 100).toFixed(2);
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
        {Object.keys(votes).map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.button,
              isOptionSelected(option) && { backgroundColor: "#cccccc" },
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={voted}
          >
            <View style={styles.headContainer}>
              <Text style={styles.buttonText}>{option}</Text>
              {voted && (
                <View style={styles.votingRatioContainer}>
                  <Text style={styles.votingRatioText}>
                    {calculateVotingRatio(option)}%
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}

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
  votingRatioContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
});

export default QuizScreen;

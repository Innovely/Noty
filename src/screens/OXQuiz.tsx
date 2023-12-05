import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

const OXQuiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisibleCorrect, setModalVisibleCorrect] = useState(false);
  const [modalVisibleIncorrect, setModalVisibleIncorrect] = useState(false);

  const handleAnswer = (userAnswer) => {
    // 여기서 실제 정답과 사용자의 선택을 비교하여 모달을 보여줄 수 있습니다.
    const isCorrect = userAnswer === "O"; // 예시로 O를 정답으로 가정합니다.

    if (isCorrect) {
      setModalVisibleCorrect(true);
    } else {
      setModalVisibleIncorrect(true);
    }
  };

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
            onPress={() => {
              setSelectedOption("O");
              handleAnswer("O");
            }}
          >
            <Text style={styles.buttonText}>{"O"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonN}
            onPress={() => {
              setSelectedOption("X");
              handleAnswer("X");
            }}
          >
            <Text style={styles.buttonText}>{"X"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 정답 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCorrect}
        onRequestClose={() => {
          setModalVisibleCorrect(!modalVisibleCorrect);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>정답입니다!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisibleCorrect(!modalVisibleCorrect)}
            >
              <Text style={styles.modalButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 오답 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleIncorrect}
        onRequestClose={() => {
          setModalVisibleIncorrect(!modalVisibleIncorrect);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>오답입니다!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisibleIncorrect(!modalVisibleIncorrect)}
            >
              <Text style={styles.modalButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginLeft: 10,
    marginBottom: 10,
    color: "#00A184",
  },
  quizText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
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
    flexDirection: "row",
    marginTop: 50,
  },
  quizImage2: {
    resizeMode: "cover",
    marginTop: 25,
    marginLeft: 225,
  },
  headContainer: {
    flexDirection: "row",
  },
  // 모달 스타일
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    width: 375,
    height: 385,
    alignItems: "center",
    marginBottom: 100,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "#00A184",
    padding: 10,
    borderRadius: 5,
    marginTop: 250, // 사진 넣을것 추가
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OXQuiz;

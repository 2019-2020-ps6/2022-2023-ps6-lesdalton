const { Router } = require("express");

const { Answer, Result } = require("../../models");
const manageAllErrors = require("../../utils/routes/error-management");

const router = new Router();

// /////////////////////////////////
//
//    Submit Answer of the question
//
// /////////////////////////////////

// Pass quiz id , question ID and User ID the api will tell
//  1. Answer is correct or not
//  2. Answer is wrong It will also send the correct answer
// 3. Answer will stored in current db


router.get(
  "/quizId/:quizId/questionId/:questionId/userId/:userId",
  async (req, res) => {
    try {
      const { questionId, quizId, userId } = req.params;
      const { answer } = req.body;
      const result = Answer.get();
      const data = result.filter(
        (d1) => d1.questionId == questionId && d1.isCorrect == true
      );
        if(data?.length==0){
          return res.status(200).json({
            message: 'question not found',
            data
          });
        }
      const isAnswer = data[0].text == answer;
      const questionnswer = isAnswer ? "Correct" : "Wrong";
      const add = Result.create({
        questionId: questionId,
        quizId: quizId,
        answer: isAnswer,
        userId: userId,
      });
      res.status(200).json({
        answer: questionnswer,
        data,
      });
    } catch (err) {
      manageAllErrors(res, err);
      console.log(err);
    }
  }
);

// /////////////////////////////////
//
//    Get Result of the user quiz
//
// /////////////////////////////////

//  pass quiz id and user id in params, API will shown results
// total question in quiz
// Correct answer
// Wrong answer


router.get("/quizId/:quizId/userId/:userId", async (req, res) => {
  try {
    const { quizId, userId } = req.params;
    
    const result = Result.get();
    const totalQuestion = result.filter(
      (d1) => d1.quizId == quizId && d1.userId == userId
    );
    const correctAnswer = totalQuestion.filter((d1) => d1.answer == true);
    const wrongAnswer = totalQuestion.filter((d1) => d1.answer == false);

    res.status(200).json({
      totalQuestion: totalQuestion?.length,
      correctAnswer: correctAnswer?.length,
      wrongAnswer: wrongAnswer?.length,
      answer: result,
    });
  } catch (err) {
    manageAllErrors(res, err);
    console.log(err);
  }
});

module.exports = router;

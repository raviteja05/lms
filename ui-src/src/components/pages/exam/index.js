import React from "react";
import { Field } from "redux-form";
import Axios from "axios";
import '../../../vendor/custom.css'
export const ExamSection = ({
  data,
  fetchCurrentQuestion,
  questionIndex,
  index,
  currentQuestion,
  handleNext,
  handlePrevious,
  answers,
  result,
}) => {
  return (
    <React.Fragment>
      <section className="jumbotron">
        <div className="row">
          <div className="col-2 border-right border-secondary">
            <div className="container">
              <h5 className="text-center">Questions</h5>

              {data &&
                data.questions.map((el, loopIndex) => (
                  <QuestionIcon
                    data={el}
                    key={`icon-${el.id}`}
                    questions={data.questions}
                    questionIndex={questionIndex}
                    answers={answers}
                    loopIndex={loopIndex}
                    currentIndex={index}
                    changeCurrentQuestion={fetchCurrentQuestion}
                  />
                ))}
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <Timer />
            </div>
            <div className="row mt-4 ml-3">
              <div className="container">
                <form>
                  <MCQuestion data={currentQuestion} answers={answers} />
                  <div className="row my-1">
                    {index !== 0 && (
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={(ev) =>
                            handlePrevious(
                              data.questions,
                              fetchCurrentQuestion,
                              questionIndex,
                              index
                            )
                          }
                        >
                          Back
                        </button>
                      </div>
                    )}
                    <div className="col-3">
                      <button
                        type="button"
                        className="btn btn-info btn-block my-4 col-3"
                        onClick={(ev) => {
                          handleSubmit(data, answers, result);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    {data && index !== data.questions.length - 1 && (
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-primary ml-5"
                          onClick={(ev) =>
                            handleNext(
                              data.questions,
                              fetchCurrentQuestion,
                              questionIndex,
                              index
                            )
                          }
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export const Result = ({ result }) => {
  return (
    <table className="m-5 container table table-bordered text-secondary">
      <tbody>
        <tr>
          <th scope="row">Test UID</th>
          <td>{result.id}</td>
        </tr>
        <tr>
          <th scope="row">Marks Obtained</th>
          <td>{result.obtainedScore}</td>
        </tr>
        <tr>
          <th scope="row">Total Marks</th>
          <td>{result.totalScore}</td>
        </tr>
        <tr>
          <th scope="row">Percentage</th>
          <td>{result.percentage}</td>
        </tr>
      </tbody>
    </table>
  );
};
const handleSubmit = (data, answers, resFunc) => {
  var recAnswers = [];
  console.log(resFunc);
  Object.entries(answers.values).map((el) => {
    recAnswers.push({ question: { id: el[0] }, option: { id: el[1] } });
  });

  var result = {
    testId: data.id,
    recordedAnswers: recAnswers,
  };
  Axios.post("/get-result", result).then((res) => {
    resFunc(res);
  });
};

const QuestionIcon = ({
  data,
  questions,
  loopIndex,
  currentIndex,
  questionIndex,
  answers,
  changeCurrentQuestion,
}) => {
  var current = "";
  current =
    loopIndex === currentIndex
      ? ""
      : answers && answers.values && answers.values[questions[loopIndex].id]
      ? answers &&
        answers.values &&
        answers.values[questions[loopIndex].id + "-review"]
        ? "-warning"
        : "-success"
      : "-secondary";

  return (
    <React.Fragment>
      <a href="#">
        <i
          className={`text${current} material-icons md-24`}
          id={`question-${data.id}`}
          onClick={(ev) => {
            questionIndex(loopIndex);
            changeCurrentQuestion(questions[loopIndex]);
          }}
        >
          stars
        </i>
      </a>
    </React.Fragment>
  );
};

const Timer = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h6 className="text-center">
          Time Remaining - <span>33:24</span>
        </h6>
      </div>
    </React.Fragment>
  );
};
const MCQuestion = ({ data, answers }) => {
  return (
    <React.Fragment>
      <p className="text-dark h6">{data && data.description}</p>
      <div className="row my-3" id={data && data.id}>
        {data &&
          data.options.map((el) => (
            <MultipleChoiceOption
              key={`option-${el.id}`}
              name={data.id}
              id={data.id}
              data={el}
              answers={answers}
            />
          ))}
      </div>

      <MarkQuestionForReview data={data} answers={answers} />
    </React.Fragment>
  );
};

const input = (props) => {
  var answer =
    props.answers && props.answers.values
      ? props.answers.values[props.input.name]
      : "";

  return (
    <input
      className="form-check-input"
      type={props.type}
      name={props.input.name}
      id={`id-${props.data.id}`}
      value={props.data.id}
      checked={answer === props.data.id}
      onChange={props.input.onChange}
    />
  );
};

const checkbox = (props) => {
  var check = false;
  if (
    props.answers &&
    props.answers.values &&
    props.answers.values[props.data.id + "-review"]
  )
    check = props.answers.values[props.data.id + "-review"];

  return (
    <input
      className="form-check-input"
      type={props.type}
      name={props.input.name}
      id={`id-${props.data.id}`}
      checked={check}
      onChange={props.input.onChange}
    />
  );
};
export const MultipleChoiceOption = ({ id, data, answers }) => {
  return (
    <React.Fragment>
      <div className="col-6">
        <div className="form-check">
          <Field
            name={id}
            component={input}
            answers={answers}
            type="radio"
            data={data}
          />
          <label className="form-check-label lead" htmlFor={id}>
            {data.description}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

const MarkQuestionForReview = ({ answers, data }) => {
  return (
    <React.Fragment>
      <div className="row mt-5 mb-4">
        {data && (
          <div className="col">
            <div className="form-check">
              <Field
                name={`${data.id}-review`}
                data={data}
                component={checkbox}
                answers={answers}
                type="checkbox"
              />
              <label className="form-check-label lead" htmlFor="defaultCheck1">
                *Mark for Review
              </label>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

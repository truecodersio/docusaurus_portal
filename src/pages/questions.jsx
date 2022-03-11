import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";

const question = {
  snippetA: `<img alt="HTML Best Practices" src="/img/logo.png">\n<hr />`,
  snippetB: `<img alt="HTML Best Practices" src="/img/logo.png">\n<hr>`,
  answer: "snippetA",
};

const WelcomeCard = ({ onClick }) => {
  return (
    <div className="card-demo">
      <div className="card p-3">
        <div className="card__header">
          <h1>HTML Best Practices</h1>
        </div>
        <div className="card__body">
          <p>
            You will be show code snippets that contain good and bad practices.
            Answer each question by selecting the <em>good practice</em>{" "}
            snippet.
          </p>
          <p>Let's see what've you learned!</p>
        </div>
        <div className="card__footer">
          <button
            className="button button--secondary button--block"
            onClick={onClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ snippetA, snippetB, answer, explanation, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const onAnswer = (correct) => {
    setIsCorrect(correct);
    setShowAnswer(true);
  };

  return (
    <div className="card-demo">
      <div className="card p-3">
        <div className="card__header">
          <h1>Select the best practice...</h1>
        </div>
        {showAnswer ? (
          <>
            <div className="card__body">
              <pre
                className={
                  answer == "snippetA" ? "border-success" : "border-danger"
                }
              >
                <code>{snippetA}</code>
              </pre>
              <hr />
              <pre
                className={
                  answer == "snippetB" ? "border-success" : "border-danger"
                }
              >
                <code>{snippetB}</code>
              </pre>
            </div>
            <div className="card__footer">
              <p>{explanation}</p>
              <button
                className="button button--secondary button--block"
                onClick={onNext}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="card__body">
            <pre
              className="answer-hover"
              onClick={() => onAnswer(answer == snippetA)}
            >
              <code>{snippetA}</code>
            </pre>
            <hr />
            <pre
              className="answer-hover"
              onClick={() => onAnswer(answer == snippetB)}
            >
              <code>{snippetB}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const Questions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const onStart = () => {
    setIsPlaying(true);
  };

  return (
    <Layout title="Practice">
      <main className="homeSection">
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6 mx-auto">
                {isPlaying ? (
                  <QuestionCard {...question} />
                ) : (
                  <WelcomeCard onClick={onStart} />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Questions;

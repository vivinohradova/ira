import styles from "./CardReviews.module.scss";

const CardReviews = (props) => {
 const { userName, userPosition, questions = [], replies = [] } = props;

  const renderQA = (question, reply, index) => {
    if (!question && !reply) return null;

    return (
      <li key={index}>
        {question && <p>{question}</p>}
        {reply && <p>{reply}</p>}
      </li>
    );
  };

  return (
    <div className={styles.card_reviews}>
      <div>
        <p className={styles.name}>{userName}</p>
        <p className={styles.position}>{userPosition}</p>
      </div>
      <div className={styles.question_answer}>
        <ul>
          {renderQA(questions[0], replies[0], 0)}
          {renderQA(questions[1], replies[1], 1)}
          {renderQA(questions[2], replies[2], 2)}
        </ul>
      </div>
    </div>
  );
};

export default CardReviews;

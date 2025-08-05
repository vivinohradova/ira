import styles from "./Reviews.module.scss";
import CardReviews from "../CardReviews/CardReviews";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const usersData = [
  {
    id: 1,
    userName: "userName1",
    userPosition: "userPosition1",
    questions: ["questions1", "questions2", "questions3"],
    replies: ["replies1", "replies2", "replies3"],
  },
  {
    id: 2,
    userName: "userName2",
    userPosition: "userPosition2",
    questions: ["questions1", "questions2", "questions3"],
    replies: ["replies4", "replies5", "replies6"],
  },
  {
    id: 3,
    userName: "userName3",
    userPosition: "userPosition3",
    questions: ["questions1", "questions2", "questions3NextAge"],
    replies: ["replies7", "replies8", "replies9"],
  },
  {
    id: 4,
    userName: "userName4",
    userPosition: "userPosition4",
    questions: ["questions2", "questions4"],
    replies: ["replies10", "replies11"],
  },
];

const Reviews = () => {
  const { t } = useTranslation();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const intervalRef = useRef(null);

  const translatedUsersData = usersData.map((user) => ({
    ...user,
    userName: t(user.userName),
    userPosition: t(user.userPosition),
    questions: user.questions.map((question) => t(question)),
    replies: user.replies.map((reply) => t(reply)),
  }));

  useEffect(() => {
    if (autoSwitchEnabled) {
      intervalRef.current = setInterval(() => {
        setActiveCardIndex(
          (prevIndex) => (prevIndex + cardsPerView) % translatedUsersData.length
        );
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoSwitchEnabled, cardsPerView, translatedUsersData.length]);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 801 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setActiveCardIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerView;
      return newIndex >= 0
        ? newIndex
        : translatedUsersData.length - cardsPerView;
    });
    setAutoSwitchEnabled(false);
  };

  const handleNextClick = () => {
    setActiveCardIndex((nextIndex) => {
      const newIndex = nextIndex + cardsPerView;
      return newIndex < translatedUsersData.length ? newIndex : 0;
    });
    setAutoSwitchEnabled(false);
  };

  const visibleCards = translatedUsersData.slice(
    activeCardIndex,
    activeCardIndex + cardsPerView
  );

  return (
    <>
      <section id="reviews" className={styles.reviews}>
        <div className={styles.container}>
          <h2>{t("menuReviews")}</h2>
          <div className={styles.card_container}>
          <div className={styles.cards}>
            {visibleCards.map((cardData, idx) => (
              <CardReviews key={cardData.id} {...cardData} />
            ))}</div>

            <div className={styles.buttons}>
              <FaAngleDoubleLeft
                className={styles.button}
                onClick={handlePrevClick}
              >
                &#60;
              </FaAngleDoubleLeft>
              <FaAngleDoubleRight
                className={styles.button}
                onClick={handleNextClick}
              >
                &#62;
              </FaAngleDoubleRight>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;

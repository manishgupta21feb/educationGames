const randomizeQuestions = (questions) => {
  const randomisedQuestions = [];
  const array = questions.map((q) => ({ ...q }));
  for (let i = 0; i < 4; i++) {
    const qset = array.splice(0, 2);
    const randomIndex = Math.floor(Math.random() * qset.length);
    const item = qset.splice(randomIndex, 1)[0];
    randomisedQuestions.push({ ...item });
    randomisedQuestions.push({ ...qset[0] });
  }
  for (let i = 0; i < randomisedQuestions.length; i++) {
    randomisedQuestions[i].id = i + 1;
  }
  const result = [...randomisedQuestions, ...array];
  return result.map((r) => ({ ...r }));
};

export { randomizeQuestions };

import {onMounted, ref } from "vue";
import axios from "axios";

const getData = () => {
  const history = ref([]);
  const score = ref({});
  const getScore = async () => {
    try {
      const scoreData = await axios.get("http://localhost:3000/score");
      score.value = await scoreData.data;
      return score.value;
    } catch (e) {
      console.log(e);
    }
  };
  const getHistory = async () => {
    try {
      const historyData = await axios.get(
        "http://localhost:3000/history?_sort=id&_order=desc"
      );
      history.value = await historyData.data;
      console.log(history.value);
    } catch (e) {
      console.log(e);
    }
  };
  return {history, score, getScore, getHistory};
};

export default getData
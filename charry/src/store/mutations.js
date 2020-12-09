import Constant from "../constant/index";

export default {
  [Constant.PUSH_MSG_DATA]: ($state, $payload) => {
    $state.msgDatas.push($payload);
  },
};

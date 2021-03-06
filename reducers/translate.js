export const init = {
  translateSimplerequest: false,
  translateSimplesuccess: false,
  translateSimplefailure: false,

  translateTemplaterequest: false,
  translateTemplatesuccess: false,
  translateTemplatefailure: false,

  simple: [],
  template: {
    1: {
      id: null,
      InputStart: `안녕하십니까.\n남아 있던 나뭇잎도 모두 다 떨어지고 헐벗은 듯 앙상한 가지만 보이는 나무에 불어오는 차가운 겨울 바람이 몹시도 추운 날입니다.\n귀사가 더욱 발전하고 건승하기를 기원합니다`,
      InputMiddle: `금번 귀사의 인사이동 때 홍길동과장으로 승진하게 되셨다는 소식을 듣고 기쁜 마음에 축하의 말씀을 올립니다.\n○○부는 꼼꼼하고 숫자개념에 밝아야 하기에 홍길동과장님에게 어울리는 업무가 아닐까 생각해오던 참입니다.\n귀사의 가장 중요한 부서에서 홍길동과장님의 실력을 충분히 발휘할 수 있으리라 생각합니다.\n부서 이동과 관련하여 여러 가지로 준비하기에 바쁜 날들을 보내고 계시리라 믿습니다.`,
      InputEnd: `모쪼록 힘내시고 앞으로 홍길동과장님의 큰 활약을 기대합니다.\n감사합니다.`,
      Output: null,
    },
    2: {
      id: null,
      InputStart: `주식회사 회사이름 엔지니어 홍길동입니다.\n바쁘신 중에 메일을 확인해 주셔서 감사합니다.`,
      InputMiddle: `전우치부장님에게 동행의 부탁을 드리고자 이렇게 메일을 보냅니다.\n사실 저는 주식회사 회사이름으로부터 데이터 하우스 구축의 상담을 받아 질문에 대응해 주실 분을 귀사에서 찾았고, 이에 적임자인 전우치부장님을 소개해 주셨습니다.\n곧 동행하면서 뵙겠습니다만, 혹시 사내에 다른 동행 요청자가 있는지를 이번 주까지 알려주시기를 바랍니다.\n가능한 경우는, 재차 방문 일자를 조정할 예정입니다.\n만일 제가 알지 못한 가운데 먼저 동행 요청을 한 분이 계시다면 일정을 조율할 생각입니다.\n또한 다른 적임자라고 생각하는 사람이 계시면 번거로우시겠지만 소개 부탁합니다.`,
      InputEnd: `주식회사 회사이름으로부터의 자세한 상담 내용은 다음의 첨부자료를 참고해주시기 바랍니다.\n잘 검토 부탁합니다.`,
      Output: null,
    },
    3: {
      id: null,
      InputStart: `본사는 지난 ○○년부터 개발하였던 제품을 올해 출시합니다.\n이번 제품은 본사가 오랜 세월 개발에 투자한 신제품으로 본사의 주력제품입니다.`,
      InputMiddle: `이번 제품에 본사는 자신이 있어 귀하께 제품 사용을 권유하는 바입니다.\n귀하께서 현재 이와 관련된 제품을 사용하고 있지 않다면 본사의 제품을 사용해 보시기 바랍니다.\n시중에 나와있는 제품과 달리 본사에서 이들 제품보다 업그레이드한 제품으로 출시하였고, 이를 통해 본사에서는 소비자들에게 더욱 질 좋은 제품을 제공하도록 노력할 계획입니다.\n현재도 여러 다른 제품을 연구개발 중에 있으며 이들 제품이 소비자들에게 인정을 받을 수 있도록 최선을 다하고 있습니다.`,
      InputEnd: `귀하께 본사의 제품 카탈로그를 한 부 보내드리오니, 보시고 필요하시거나\n궁금한 사항이 있으시면 본사로 연락주시기 바랍니다.`,
      Output: null,
    },
    4: {
      id: null,
      InputStart: `○○ 부서의 노고에 감사합니다.`,
      InputMiddle: `본 부서에서는 ○○ 부서에 대한 지원방안에 대해 고민한 결과, 본 부서에서 마련한 지원방안은 ○○ 부서에 대한 자금 지원을 포함합니다. 이를 위해 본 부서에서는 예산을 따로 책정하여 ○○ 부서에 자금을 지원할 예정입니다.\n각 부서에 지원할 자금은 각 부서에서 요청한 사항을 기반으로 본 부서에서 여러 가지 부서의 상황을 고려하여 책정할 예정입니다.\n본 부서의 지원금에 대해서 각 부서에도 통보한 상황이오니 이에 대한 검토와 결재를 요청드리는 바입니다.`,
      InputEnd: `각 부서의 지원금에 대한 내역은 첨부자료 참고 부탁합니다.\n문의사항이 있으시면 본 부서로 연락을 주시기 바랍니다.`,
      Output: null,
    },
    5: {
      id: null,
      InputStart: `오늘 하루도 활기찬 하루 보내셨나요?\n주식회사 회사이름 ○○부의 홍길동입니다`,
      InputMiddle: `어제 맛있는 음식을 대접해주셔서 감사합니다. 또한 부장님으로부터 들은 유의미한 조언들은 저에게 많은 도움이 될 것입니다.\n지금 진행하고 있는 프로젝트에 도움이 필요한 부분이 있어, 조언을 해줄 멘토가 있었으면 했는데 이렇게 부장님과 귀한 시간을 갖게 되어 영광입니다.\n20년이 넘는 부장님의 사회생활 경험담은 저에게 있어 앞으로 어떻게 사회생활을 해야 하는지에 대한 길을 제시해 주셨습니다.\n제가 이렇게 힘들 때에 선뜻 부장님이 식사를 제안해 주셔서 정말 감사합니다.\n부장님과 함께했던 즐거운 식사 자리는 저에게 즐겁고 편안한 추억이 될것입니다.`,
      Output: null,
    },
  },
};

export const TRANSLATE_SIMPLE_REQUEST = "TRANSLATE_SIMPLE_REQUEST";
export const TRANSLATE_SIMPLE_SUCCESS = "TRANSLATE_SIMPLE_SUCCESS";
export const TRANSLATE_SIMPLE_FAILURE = "TRANSLATE_SIMPLE_FAILURE";

export const TRANSLATE_TEMPLATE_REQUEST = "TRANSLATE_TEMPLATE_REQUEST";
export const TRANSLATE_TEMPLATE_SUCCESS = "TRANSLATE_TEMPLATE_SUCCESS";
export const TRANSLATE_TEMPLATE_FAILURE = "TRANSLATE_TEMPLATE_FAILURE";

export const REMOVE_SIMPLE_REQUEST = "REMOVE_SIMPLE_REQUEST";
export const REMOVE_SIMPLE_SUCCESS = "REMOVE_SIMPLE_SUCCESS";
export const REMOVE_SIMPLE_FAILURE = "REMOVE_SIMPLE_FAILURE";

export default (state = init, action) => {
  switch (action.type) {
    case TRANSLATE_SIMPLE_REQUEST: {
      return {
        ...state,
        translateSimplerequest: true,
        translateSimplesuccess: false,
        translateSimplefailure: false,
      };
    }
    case TRANSLATE_SIMPLE_SUCCESS: {
      return {
        ...state,
        translateSimplerequest: false,
        translateSimplesuccess: true,
        translateSimplefailure: false,

        simple: [
          { id: action.id, Input: action.Input, Output: action.Output },
          ...state.simple,
        ],
      };
    }
    case TRANSLATE_SIMPLE_FAILURE: {
      return {
        ...state,
        translateSimplerequest: false,
        translateSimplesuccess: false,
        translateSimplefailure: true,
      };
    }
    case TRANSLATE_TEMPLATE_REQUEST: {
      return {
        ...state,
        templateTemplaterequest: true,
        templateTemplatesuccess: false,
        templateTemplatefailure: false,
      };
    }
    case TRANSLATE_TEMPLATE_SUCCESS: {
      const obj = state.template;
      console.log(obj);

      switch (action.option) {
        case 1:
          obj["1"].id = action.id;
          obj["1"].Output = action.Output;

          break;
        case 2:
          obj["2"].id = action.id;
          obj["2"].Output = action.Output;
          break;

        case 3:
          obj["3"].id = action.id;
          obj["3"].Output = action.Output;
          break;

        case 4:
          obj["4"].id = action.id;
          obj["4"].Output = action.Output;
          break;
        case 5:
          obj["5"].id = action.id;
          obj["5"].Output = action.Output;
          break;
        default:
          alert("불가능한 설정입니다.");
          break;
      }

      return {
        ...state,
        templateTemplaterequest: false,
        templateTemplatesuccess: true,
        templateTemplatefailure: false,
        template: obj,
      };
    }
    case TRANSLATE_TEMPLATE_FAILURE: {
      return {
        ...state,
        translateTemplaterequest: false,
        translateTemplatesuccess: false,
        translateTemplatefailure: true,
      };
    }
    case REMOVE_SIMPLE_REQUEST: {
      state.simple.shift((v) => v.id !== action.id);

      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

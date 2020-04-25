import { observable, action, computed } from "mobx";
import Utility from "../common/Utility";
import UserService from "../services/userService";

const initialState = {
  loaderCount: 0,
  memberList: [],
};

class SharedStore {
  constructor() {
    this.load();
  }

  load() {
    let sharedStoreData = Utility.getData("sharedStore");
    if (
      sharedStoreData &&
      sharedStoreData.countryData &&
      sharedStoreData.countryData.length !== 0
    ) {
      this.countryData = sharedStoreData.countryData;
      this.memberList = sharedStoreData.memberList || [];
    }
  }

  @observable loaderCount = initialState.loaderCount;
  @observable memberList = initialState.memberList;

  @action showLoader() {
    this.loaderCount++;
  }

  @action hideLoader() {
    if (this.loaderCount !== 0) {
      this.loaderCount--;
    }
  }

  @action reset() {
    this.loaderCount = initialState.loaderCount;
  }

  @computed get isShowLoader() {
    if (this.loaderCount <= 0) {
      return false;
    }
    return true;
  }

  @action setMemberList(list) {
    this.memberList = list;
  }
}

export default SharedStore;

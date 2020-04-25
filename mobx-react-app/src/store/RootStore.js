import { autorun } from "mobx";
import SharedStore from "./SharedStore";
import Utility from "../common/Utility";

class RootStore {
  constructor() {
    this.sharedStore = new SharedStore(this);
    autorun((a) => {
      let sharedStoreData = Utility.getData("sharedStore");

      if (!sharedStoreData) {
        sharedStoreData = {};
      }
      sharedStoreData.countryData = this.sharedStore.countryData;
      sharedStoreData.stateData = this.sharedStore.stateData;
      sharedStoreData.companyId = this.sharedStore.companyId;
      sharedStoreData.invoiceData = this.sharedStore.invoiceData;
      sharedStoreData.companyMemberId = this.sharedStore.companyMemberId;
      sharedStoreData.companyArr = this.sharedStore.companyArr;
      sharedStoreData.token_setting_id = this.sharedStore.token_setting_id;
      sharedStoreData.is_custom_payment_enabled = this.sharedStore.is_custom_payment_enabled;
      sharedStoreData.companyName = this.sharedStore.companyName;
      sharedStoreData.licenseData = this.sharedStore.licenseData;
      sharedStoreData.companySeriesType = this.sharedStore.companySeriesType;
      Utility.setData("sharedStore", sharedStoreData);
    });
  }
}

const rootStore = new RootStore();

export default rootStore;

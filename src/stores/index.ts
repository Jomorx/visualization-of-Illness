import { defineStore } from "pinia";
import { getListApi } from "@/server/api";
import type {RootObject,Children,ChinaAdd, ChinaTotal, LocalCityNCOVDataList,} from './type'
export const useStore = defineStore({
  id: "counter",
  state: () => ({
    list: <RootObject>{},
    item:<Children[]>[],
    chinaAdd:<ChinaAdd>{},
    chinaTotal:<ChinaTotal>{},
    cityDetail:<LocalCityNCOVDataList[]>[]
  }),
  actions: {
   async getList() {
      const {data:data} =await getListApi();
      this.list=data
      this.chinaAdd=this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal=this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail= this.list.localCityNCOVDataList.slice(0,10)
    },
  },
});

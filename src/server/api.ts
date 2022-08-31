export const getListApi =async ()=>{
    const data =await fetch('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf',{
        method:'post'
    })
    return data.json()
}
import axios from 'axios'

const data = {
    get() {
        return axios({
                url: '/ajax/moreComingList?token=&movieIds=248327%2C595448%2C1238775%2C1225761%2C1282884%2C284388%2C7010%2C11956%2C10545%2C6591',
                method: 'GET',
            })
            .then((result) => {
                return result.data.coming
                console.log(result)
            })
            .catch((err) => {
                alert("请求出错")
            })
    }
}
export default data